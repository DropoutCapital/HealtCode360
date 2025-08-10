import React, { useMemo } from "react";

export default function MedicalCrossAnimation({
  size = 420,
  rows = 22,
  cols = 56, // ahora 9 columnas totales
  barThickness = 6,
  cell = 6.0,
  gap = 5.0,
  scaleX = 1.5,
  scaleY = 0.6,
  baseColor = "#93fbfb",
  accentColor = "#00FF88",
  duration = 4200,
  stagger = 24,
}) {
  const midR = (rows - 1) / 2;
  const midC = (cols - 1) / 2;
  const halfBar = Math.max(1, Math.floor(barThickness / 2));

  // Genera los puntos sólo donde existe la cruz
  const dots = useMemo(() => {
    const list = [];
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const inVertical = Math.abs(c - midC) <= halfBar;
        const inHorizontal = Math.abs(r - midR) <= halfBar;
        if (inVertical || inHorizontal) {
          list.push({ r, c, i: i++ });
        }
      }
    }
    return list;
  }, [rows, cols, halfBar, midR, midC]);

  // Dimensiones del lienzo
  const pitch = cell + gap; // distancia entre centros
  const width = cols * pitch;
  const height = rows * pitch;

  // Para centrar el grid en el viewBox
  const vb = `0 0 ${width} ${height}`;

  return (
    <div
      style={{
        width: size,
        maxWidth: "100%",
        filter: "drop-shadow(0 0 40px rgba(147,251,251,0.2))",
        opacity: 0.35,
      }}
    >
      <svg viewBox={vb} role="img" aria-label="Animación de cruz médica">
        <title>Medical Cross Animation</title>
        <desc>
          Rejilla densa de piezas romboidales formando una cruz con transición
          de color entre cian y verde en oleadas.
        </desc>

        {/* Estilos y animaciones */}
        <style>{`
          @keyframes colorShift {
            0%   { fill: var(--cA); opacity: .60; }
            38%  { fill: var(--cA); opacity: .60; }
            50%  { fill: var(--cB); opacity: 1; }
            62%  { fill: var(--cA); opacity: .80; }
            100% { fill: var(--cA); opacity: .60; }
          }
          @keyframes twinkle {
            0%, 92% { opacity: inherit; }
            96% { opacity: 1; }
            100% { opacity: inherit; }
          }
          .dot {
            --cA: ${baseColor};
            --cB: ${accentColor};
            animation: colorShift ${duration}ms ease-in-out infinite;
            animation-delay: calc(var(--i) * ${stagger}ms);
            transform-origin: center;
            filter: url(#glow);
          }
          /* Salpicamos algunos verdes permanentes para que recuerde al original */
          .dot.accent {
            --cA: ${accentColor};
            --cB: ${baseColor};
          }
          /* Pequeño destello ocasional sobre un subconjunto */
          .dot.spark { animation-name: colorShift, twinkle; animation-duration: ${duration}ms, 2200ms; }
        `}</style>

        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.35" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map(({ r, c, i }) => {
          const x = c * pitch + pitch / 2;
          const y = r * pitch + pitch / 2;
          const classList = ["dot"];
          // Cada 23ª pieza será "accent" (verde constante) para romper el patrón
          if (i % 23 === 0) classList.push("accent");
          // Algunas chispas aleatorias pero deterministas
          if ((r * 7 + c * 13) % 37 === 0) classList.push("spark");
          return (
            <g
              key={`${r}-${c}`}
              transform={`translate(${x} ${y}) rotate(45) scale(${scaleX} ${scaleY})`}
            >
              <rect
                x={-cell / 2}
                y={-cell / 2}
                width={cell}
                height={cell}
                rx={cell * 0.24}
                ry={cell * 0.24}
                className={classList.join(" ")}
                style={{ ["--i"]: i } as React.CSSProperties}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
