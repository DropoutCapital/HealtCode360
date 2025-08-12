import { useMemo, useEffect, useState } from "react";

export default function ArcCircles() {
  const [size, setSize] = useState({ w: 400, h: 400 });

  useEffect(() => {
    const onResize = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [params] = useState({
    N: 200, // cantidad de círculos
    rFactor: 0.1, // radio de cada círculo relativo al lado menor (0–0.5)
    RFactor: 0.58, // radio del arco (trayectoria de los centros) relativo (0–1)
    arcDeg: 600, // amplitud del arco
    strokeOpacity: 0.35,
    strokeWidth: 1.2,
    stroke: "#5ec0bb",
    yFactor: 0.52,
  });

  const { w: W, h: H } = size;
  const minSide = Math.min(W, H);

  const computed = useMemo(() => {
    const r = minSide * params.rFactor;
    const R = minSide * params.RFactor;
    const cx = W / 2;
    const cy = H * params.yFactor;

    const circles = [];
    const start = -params.arcDeg / 2;
    const step = params.arcDeg / Math.max(1, params.N - 1);

    for (let i = 0; i < params.N; i++) {
      const a = ((start + step * i) * Math.PI) / 180;
      const ccx = cx + R * Math.cos(a);
      const ccy = cy + R * Math.sin(a);
      circles.push({ cx: ccx, cy: ccy, r });
    }
    return { circles, cx, cy, r, R };
  }, [W, H, minSide, params]);

  return (
    <div className="relative w-full h-full -ml-7 flex items-center justify-center">
      <svg width={W} height={H} className="block">
        <defs>
          <linearGradient
            id="fadeOnlyCircles"
            x1="0"
            y1="0"
            x2="0"
            y2={H}
            gradientUnits="userSpaceOnUse"
          >
            {/* Fade arriba */}
            <stop offset="0" stopColor="black" />
            <stop offset={H * 0.12} stopColor="white" />

            {/* Centro visible */}
            <stop offset={H * 0.88} stopColor="white" />

            {/* Fade abajo */}
            <stop offset="100%" stopColor="black" />
            <stop offset={H} stopColor="black" />
          </linearGradient>

          <mask id="maskOnlyCircles" maskUnits="userSpaceOnUse">
            <rect
              x="0"
              y="0"
              width={W}
              height={H}
              fill="url(#fadeOnlyCircles)"
            />
          </mask>
        </defs>

        {/* Solo los círculos llevan la máscara */}
        <g mask="url(#maskOnlyCircles)" style={{ mixBlendMode: "screen" }}>
          {computed.circles.map((c, i) => (
            <circle
              key={i}
              cx={c.cx}
              cy={c.cy}
              r={c.r}
              fill="none"
              stroke={params.stroke}
              strokeWidth={params.strokeWidth}
              opacity={params.strokeOpacity}
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
