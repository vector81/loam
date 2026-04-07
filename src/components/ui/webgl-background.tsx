"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  // Simplex-ish noise
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

  float fbm(vec2 p) {
    float f = 0.0;
    float w = 0.5;
    for (int i = 0; i < 5; i++) {
      f += w * snoise(p);
      p *= 2.0;
      w *= 0.5;
    }
    return f;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 p = uv * 3.0;

    float t = u_time * 0.15;

    // Mouse influence
    vec2 mouse = u_mouse / u_resolution;
    float mouseDist = length(uv - mouse);
    float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.4;

    // Layered organic noise
    float n1 = fbm(p + vec2(t * 0.3, t * 0.2));
    float n2 = fbm(p * 1.5 + vec2(-t * 0.2, t * 0.15) + n1 * 0.5);
    float n3 = fbm(p * 0.8 + vec2(t * 0.1, -t * 0.25) + n2 * 0.3);

    // Warp with mouse
    float warp = fbm(p + n1 + mouseInfluence * vec2(sin(t), cos(t)));

    // Color palette: earth tones
    vec3 forest    = vec3(0.239, 0.420, 0.310);
    vec3 terracotta = vec3(0.776, 0.482, 0.361);
    vec3 cream     = vec3(0.980, 0.969, 0.949);
    vec3 olive     = vec3(0.420, 0.482, 0.235);
    vec3 sand      = vec3(0.831, 0.769, 0.659);

    // Mix colors based on noise layers
    vec3 col = cream;
    col = mix(col, sand, smoothstep(-0.2, 0.6, n1) * 0.3);
    col = mix(col, forest, smoothstep(0.1, 0.8, n2) * 0.18 + mouseInfluence * 0.12);
    col = mix(col, terracotta, smoothstep(0.2, 0.9, warp) * 0.12);
    col = mix(col, olive, smoothstep(-0.1, 0.7, n3) * 0.08);

    // Subtle vignette
    float vig = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.2);
    col *= 0.92 + vig * 0.08;

    // Very subtle grain
    float grain = (fract(sin(dot(uv * u_time, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.02;
    col += grain;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;

    // Create shaders
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, VERTEX_SHADER);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, FRAGMENT_SHADER);
    gl.compileShader(fs);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Fullscreen quad
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
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = window.innerHeight - e.clientY;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let frame: number;
    const start = performance.now();

    const render = () => {
      const t = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      gl.uniform2f(uMouse, mouseRef.current.x * dpr, mouseRef.current.y * dpr);
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
      className="fixed inset-0 z-0 h-full w-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
