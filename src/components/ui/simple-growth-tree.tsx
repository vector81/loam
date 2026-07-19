"use client";

import { useCallback, useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

type Branch = {
  position: Point;
  stw: number;
  gen: number;
  alive: boolean;
  age: number;
  angle: number;
  speed: Point;
  index: number;
  maxlife: number;
  proba1: number;
  proba2: number;
  proba3: number;
  proba4: number;
  deviation: number;
};

type TreeState = {
  branches: Branch[];
  start: Point;
  coeff: number;
  teinte: number;
  index: number;
  proba1: number;
  proba2: number;
  proba3: number;
  proba4: number;
};

function point(x: number, y: number): Point {
  return { x, y };
}

function randomBetween(min?: number, max?: number) {
  if (min === undefined) {
    return Math.random();
  }

  if (max === undefined) {
    return Math.random() * min;
  }

  return min + Math.random() * (max - min);
}

function hsva(hue: number, saturation: number, value: number, alpha = 1) {
  const h = Math.max(0, Math.min(360, hue)) / 360;
  const s = Math.max(0, Math.min(255, saturation)) / 255;
  const v = Math.max(0, Math.min(255, value)) / 255;

  const chroma = v * s;
  const x = chroma * (1 - Math.abs(((6 * h) % 2) - 1));
  const match = v - chroma;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 1 / 6) {
    r = chroma;
    g = x;
  } else if (h < 2 / 6) {
    r = x;
    g = chroma;
  } else if (h < 0.5) {
    g = chroma;
    b = x;
  } else if (h < 4 / 6) {
    g = x;
    b = chroma;
  } else if (h < 5 / 6) {
    r = x;
    b = chroma;
  } else {
    r = chroma;
    b = x;
  }

  return `rgba(${Math.round((r + match) * 255)}, ${Math.round((g + match) * 255)}, ${Math.round(
    (b + match) * 255,
  )}, ${alpha})`;
}

function createTree(width: number, height: number): TreeState {
  const start = point(width / 2, height * 0.82);
  const tree: TreeState = {
    branches: [],
    start,
    coeff: start.y / Math.max(height - 80, 1),
    teinte: randomBetween(20, 40),
    index: 0,
    proba1: randomBetween(0.75, 0.95),
    proba2: randomBetween(0.75, 0.95),
    proba3: randomBetween(0.45, 0.65),
    proba4: randomBetween(0.45, 0.65),
  };

  tree.branches.push({
    position: { ...start },
    stw: 24 * Math.sqrt(start.y / Math.max(height, 1)),
    gen: 1,
    alive: true,
    age: 0,
    angle: 0,
    speed: point(0, -3.2),
    index: 0,
    maxlife: 18 * randomBetween(0.7, 1.2),
    proba1: tree.proba1,
    proba2: tree.proba2,
    proba3: tree.proba3,
    proba4: tree.proba4,
    deviation: randomBetween(0.5, 0.8),
  });

  return tree;
}

function spawnBranch(
  position: Point,
  stw: number,
  angle: number,
  gen: number,
  index: number,
  tree: TreeState,
): Branch {
  return {
    position: { ...position },
    stw,
    gen,
    alive: true,
    age: 0,
    angle,
    speed: point(0, -3.2),
    index,
    maxlife: 18 * randomBetween(0.5, 1),
    proba1: tree.proba1,
    proba2: tree.proba2,
    proba3: tree.proba3,
    proba4: tree.proba4,
    deviation: randomBetween(0.5, 0.8),
  };
}

export function SimpleGrowthTree() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | undefined>(undefined);
  const timeoutRef = useRef<number | undefined>(undefined);
  const treeRef = useRef<TreeState | null>(null);

  const resetTree = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;
    const devicePixelRatio = window.devicePixelRatio || 1;

    canvas.width = Math.floor(width * devicePixelRatio);
    canvas.height = Math.floor(height * devicePixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    const gradient = context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, hsva(42, 10, 252));
    gradient.addColorStop(1, hsva(42, 18, 238));
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    const vignette = context.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      0.9 * Math.max(width, height),
    );
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, "rgba(0,0,0,0.035)");
    context.fillStyle = vignette;
    context.fillRect(0, 0, width, height);

    treeRef.current = createTree(width, height);
  }, []);

  const draw = useCallback(function drawFrame() {
    const canvas = canvasRef.current;
    const tree = treeRef.current;
    if (!canvas || !tree) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let hasAliveBranch = false;

    tree.branches.forEach((branch) => {
      if (!branch.alive) {
        return;
      }

      hasAliveBranch = true;
      branch.age += 1;

      if (
        branch.age >= Math.floor(branch.maxlife / branch.gen) ||
        randomBetween(1) < 0.025 * branch.gen
      ) {
        branch.alive = false;

        if (branch.stw > 0.4 && branch.gen < 5) {
          const nextPosition = point(branch.position.x, branch.position.y);

          if (randomBetween(1) < branch.proba1 / Math.pow(branch.gen, 0.9)) {
            tree.branches.push(
              spawnBranch(
                nextPosition,
                branch.stw * randomBetween(0.5, 0.75),
                branch.angle + randomBetween(0.6, 1) * branch.deviation,
                branch.gen + 0.2,
                branch.index,
                tree,
              ),
            );
          }

          if (randomBetween(1) < branch.proba2 / Math.pow(branch.gen, 0.9)) {
            tree.branches.push(
              spawnBranch(
                nextPosition,
                branch.stw * randomBetween(0.5, 0.75),
                branch.angle - randomBetween(0.6, 1) * branch.deviation,
                branch.gen + 0.2,
                branch.index,
                tree,
              ),
            );
          }

          if (
            branch.gen < 3 &&
            randomBetween(1) < branch.proba3 / Math.pow(branch.gen, 1.1)
          ) {
            tree.branches.push(
              spawnBranch(
                nextPosition,
                branch.stw * randomBetween(0.6, 0.8),
                branch.angle + randomBetween(0.3, 0.7) * branch.deviation,
                branch.gen + 0.15,
                branch.index,
                tree,
              ),
            );
          }

          if (
            branch.gen < 3 &&
            randomBetween(1) < branch.proba4 / Math.pow(branch.gen, 1.1)
          ) {
            tree.branches.push(
              spawnBranch(
                nextPosition,
                branch.stw * randomBetween(0.6, 0.8),
                branch.angle - randomBetween(0.3, 0.7) * branch.deviation,
                branch.gen + 0.15,
                branch.index,
                tree,
              ),
            );
          }
        }
      } else {
        branch.speed.x += randomBetween(-0.15, 0.15);
      }

      const coeff = tree.coeff;
      const start = tree.start;
      const previousX = branch.position.x;
      const previousY = branch.position.y;

      branch.position.x +=
        -branch.speed.x * Math.cos(branch.angle) +
        branch.speed.y * Math.sin(branch.angle);
      branch.position.y +=
        branch.speed.x * Math.sin(branch.angle) +
        branch.speed.y * Math.cos(branch.angle);

      context.strokeStyle = hsva(
        tree.teinte + branch.age + 10 * branch.gen,
        15,
        15,
        0.06,
      );
      context.lineWidth = Math.max(
        0.5,
        1.2 * branch.stw - (branch.age / branch.maxlife) * (0.4 * branch.stw),
      );
      const mirroredOffset =
        0.008 * Math.pow(Math.abs(start.y - previousY), 1.3);
      context.beginPath();
      context.moveTo(
        previousX + mirroredOffset,
        2 * start.y - previousY + mirroredOffset,
      );
      context.lineTo(
        branch.position.x + mirroredOffset,
        2 * start.y - branch.position.y + mirroredOffset,
      );
      context.stroke();

      context.strokeStyle = hsva(
        tree.teinte + branch.age + 18 * branch.gen,
        120 * coeff,
        200 + 12 * branch.gen,
        (20 * coeff) / 100,
      );
      context.lineWidth = Math.max(
        0.3,
        0.8 * branch.stw - (branch.age / branch.maxlife) * (0.3 * branch.stw),
      );
      context.beginPath();
      context.moveTo(previousX + 0.12 * branch.stw, previousY);
      context.lineTo(branch.position.x + 0.12 * branch.stw, branch.position.y);
      context.stroke();

      const hue = tree.teinte + branch.age + 15 * branch.gen;
      const saturation = Math.min(180, 100 * coeff + 15 * branch.gen);
      const value = Math.min(150, 70 + 12 * branch.gen);
      const branchWidth = Math.max(
        0.2,
        branch.stw - (branch.age / branch.maxlife) * (0.4 * branch.stw),
      );

      context.strokeStyle = hsva(hue, saturation, value, (22 * coeff) / 100);
      context.lineWidth = branchWidth;
      context.beginPath();
      context.moveTo(previousX, previousY);
      context.lineTo(branch.position.x, branch.position.y);
      context.stroke();

      if (branch.gen < 2) {
        context.strokeStyle = hsva(
          hue + 8,
          0.5 * saturation,
          value + 30,
          (12 * coeff) / 100,
        );
        context.lineWidth = Math.max(0.1, 0.25 * branchWidth);
        context.beginPath();
        context.moveTo(previousX - 0.08 * branch.stw, previousY);
        context.lineTo(
          branch.position.x - 0.08 * branch.stw,
          branch.position.y,
        );
        context.stroke();
      }
    });

    if (hasAliveBranch) {
      timeoutRef.current = window.setTimeout(() => {
        frameRef.current = window.requestAnimationFrame(drawFrame);
      }, 1000 / 90);
    }
  }, []);

  const regrow = useCallback(() => {
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
    }
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    resetTree();
    draw();
  }, [draw, resetTree]);

  useEffect(() => {
    regrow();

    const resizeObserver = new ResizeObserver(() => {
      regrow();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [regrow]);

  return (
    <div
      ref={containerRef}
      className="relative h-[28rem] w-full overflow-hidden rounded-[2rem] border border-earth-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(245,240,225,0.9))] shadow-[0_24px_70px_rgba(74,53,32,0.1)] sm:h-[30rem]"
    >
      <div className="pointer-events-none absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-earth-300/90 to-transparent" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 cursor-pointer"
        onClick={regrow}
      />
      <div className="pointer-events-none absolute left-6 top-6 text-earth-900/46">
        <h3 className="font-heading text-2xl tracking-[-0.03em] text-earth-950/72">
          Growth tree
        </h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.2em]">
          Strategy becoming momentum
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-5 right-6 text-[11px] uppercase tracking-[0.18em] text-earth-900/34">
        Click to regrow
      </div>
    </div>
  );
}
