"use client";

import { useEffect, useRef } from "react";

const BLOB_VERTEX = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const BLOB_FRAGMENT = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  #define PI 3.14159265359

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0+h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 center = vec2(0.5);
    vec2 mouse = u_mouse / u_resolution;
    float t = u_time * 0.7;

    // Distance from center with morphing
    vec2 toCenter = uv - center;

    // Mouse influence on blob center
    vec2 blobCenter = center + (mouse - center) * 0.15;
    vec2 toBlobCenter = uv - blobCenter;

    float angle = atan(toBlobCenter.y, toBlobCenter.x);
    float dist = length(toBlobCenter);

    // Organic morphing radius - more dramatic waves
    float r = 0.28
      + 0.12 * sin(angle * 3.0 + t * 2.1)
      + 0.09 * sin(angle * 5.0 - t * 1.6)
      + 0.08 * cos(angle * 7.0 + t * 2.4)
      + 0.07 * sin(angle * 2.0 + t * 1.3)
      + 0.06 * cos(angle * 9.0 - t * 1.9)
      + 0.04 * snoise(vec2(angle * 2.0, t * 0.8))
      + 0.03 * snoise(vec2(angle * 4.0, t * 1.2));

    // Mouse proximity inflates blob - more responsive
    float mouseDist = length(uv - mouse);
    r += smoothstep(0.4, 0.0, mouseDist) * 0.12;

    float blob = smoothstep(r + 0.02, r - 0.02, dist);

    // Inner glow layers
    float inner1 = smoothstep(r * 0.7, r * 0.2, dist);
    float inner2 = smoothstep(r * 0.5, r * 0.1, dist);

    // Color mixing
    vec3 forest = vec3(0.239, 0.420, 0.310);
    vec3 forestDeep = vec3(0.102, 0.200, 0.145);
    vec3 terracotta = vec3(0.776, 0.482, 0.361);
    vec3 olive = vec3(0.420, 0.482, 0.235);

    vec3 blobColor = mix(forest, forestDeep, inner1);
    blobColor = mix(blobColor, terracotta, inner2 * 0.3 * (0.5 + 0.5 * sin(t * 0.5)));
    blobColor = mix(blobColor, olive, smoothstep(r * 0.3, r * 0.8, dist) * 0.2);

    // Edge glow
    float edge = smoothstep(r - 0.01, r + 0.06, dist) * blob;
    blobColor = mix(blobColor, terracotta * 1.2, edge * 0.4);

    // Alpha with soft edge
    float alpha = blob * 0.85;

    // Outer subtle glow
    float outerGlow = smoothstep(r + 0.15, r, dist) * (1.0 - blob) * 0.15;
    vec3 glowColor = mix(forest, terracotta, 0.3);

    vec3 finalColor = blobColor * alpha + glowColor * outerGlow;
    float finalAlpha = alpha + outerGlow;

    gl_FragColor = vec4(finalColor, finalAlpha);
  }
`;

export function MorphingBlob({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, BLOB_VERTEX);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, BLOB_FRAGMENT);
    gl.compileShader(fs);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      mouseRef.current.x = (e.clientX - rect.left) * dpr;
      mouseRef.current.y = (rect.height - (e.clientY - rect.top)) * dpr;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let frame: number;
    const start = performance.now();

    const render = () => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      const t = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
