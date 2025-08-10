// import { useEffect, useRef } from "react";

// interface MatrixRainProps {
//   height?: number;
//   color?: string;
//   backgroundFade?: string;
// }

// export default function MatrixRain({
//   height = 290,
//   color = "#00c9a7",
//   backgroundFade = "rgba(255,255,255,0.05)",
// }: MatrixRainProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number | null>(null);
//   const dropsRef = useRef<number[]>([]);
//   const fontSize = 16;
//   const letters = "f r d e g i 1 2 3 4 5".split(" ");

//   // Ajusta el tamaño del canvas y las columnas
//   const resizeCanvas = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     canvas.width = window.innerWidth;
//     canvas.height = height;
//     const columns = Math.floor(canvas.width / fontSize);
//     dropsRef.current = Array(columns).fill(1);
//   };

//   useEffect(() => {
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [height]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     if (!canvas || !ctx) return;

//     let running = true;

//     function draw() {
//       if (!running || !canvasRef.current) return;
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;
//       ctx.fillStyle = backgroundFade;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = color;
//       ctx.font = `${fontSize}px monospace`;
//       for (let i = 0; i < dropsRef.current.length; i++) {
//         const text = letters[Math.floor(Math.random() * letters.length)];
//         ctx.fillText(text, i * fontSize, dropsRef.current[i] * fontSize);
//         if (
//           dropsRef.current[i] * fontSize > canvas.height &&
//           Math.random() > 0.975
//         ) {
//           dropsRef.current[i] = 0;
//         }
//         dropsRef.current[i]++;
//       }
//       animationRef.current = requestAnimationFrame(draw);
//     }
//     animationRef.current = requestAnimationFrame(draw);
//     return () => {
//       running = false;
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [color, backgroundFade, height]);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ width: "100%", height: height, display: "block" }}
//       height={height}
//     />
//   );
// }

// import { useEffect, useRef } from "react";

// interface MatrixRainProps {
//   height?: number; // altura CSS en px
//   color?: string; // color del texto
//   backgroundFade?: string; // ej: "rgba(255,255,255,0.05)"
//   fontSize?: number; // px lógicos (antes del DPR)
//   density?: number; // 0..1: porcentaje de columnas activas
//   minSpeed?: number; // filas/ frame mín
//   maxSpeed?: number; // filas/ frame máx
//   useContainerWidth?: boolean; // usar ancho del contenedor en vez de window
// }

// export default function MatrixRain({
//   height = 290,
//   color = "#00c9a7",
//   backgroundFade = "rgba(255,255,255,0.05)",
//   fontSize = 16,
//   density = 1, // 1 = todas las columnas
//   minSpeed = 0.75,
//   maxSpeed = 1.75,
//   useContainerWidth = false,
// }: MatrixRainProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);

//   // refs que cambian sin reiniciar animación
//   const colorRef = useRef(color);
//   const fadeRef = useRef(backgroundFade);

//   const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
//   const animationRef = useRef<number | null>(null);
//   const dropsRef = useRef<Array<{ y: number; speed: number }>>([]);
//   const columnsRef = useRef<number>(0);
//   const dprRef = useRef<number>(1);
//   const runningRef = useRef<boolean>(true);

//   const letters = useRef<string[]>("f r d e g i 1 2 3 4 5".split(" "));

//   // Mantén color/fondo actualizados sin re-crear el efecto
//   useEffect(() => {
//     colorRef.current = color;
//   }, [color]);
//   useEffect(() => {
//     fadeRef.current = backgroundFade;
//   }, [backgroundFade]);

//   // Resize con DPR + opcionalmente ResizeObserver del contenedor
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const resize = () => {
//       const dpr =
//         typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
//       dprRef.current = dpr;

//       // Ancho objetivo
//       const logicalWidth =
//         useContainerWidth && wrapperRef.current
//           ? Math.floor(wrapperRef.current.clientWidth)
//           : Math.floor(window.innerWidth);

//       // Ajusta backing store con DPR
//       canvas.style.width = `${logicalWidth}px`;
//       canvas.style.height = `${height}px`;
//       canvas.width = Math.floor(logicalWidth * dpr);
//       canvas.height = Math.floor(height * dpr);

//       const ctx = (ctxRef.current ||= canvas.getContext("2d"));
//       if (!ctx) return;
//       ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
//       ctx.scale(dpr, dpr); // pinta en "px lógicos"

//       const cols = Math.max(1, Math.floor(logicalWidth / fontSize));
//       columnsRef.current = cols;

//       // Construye drops respetando densidad, manteniendo algunos si ya existen
//       const next: Array<{ y: number; speed: number }> = new Array(cols)
//         .fill(null)
//         .map((_, i) => {
//           const prev = dropsRef.current[i];
//           const active = Math.random() < density;
//           if (prev && active) return prev; // conserva cuando posible
//           const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
//           // empieza en fila aleatoria para no sincronizar
//           const startY = Math.floor(Math.random() * (height / fontSize));
//           return { y: active ? startY : -9999, speed };
//         });
//       dropsRef.current = next;
//     };

//     resize();

//     let ro: ResizeObserver | null = null;
//     if (
//       useContainerWidth &&
//       typeof ResizeObserver !== "undefined" &&
//       wrapperRef.current
//     ) {
//       ro = new ResizeObserver(resize);
//       ro.observe(wrapperRef.current);
//     } else {
//       window.addEventListener("resize", resize);
//     }

//     return () => {
//       ro?.disconnect();
//       window.removeEventListener("resize", resize);
//     };
//   }, [height, fontSize, density, minSpeed, maxSpeed, useContainerWidth]);

//   // Animación
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = ctxRef.current;
//     if (!canvas || !ctx) return;

//     runningRef.current = true;

//     const draw = () => {
//       if (!runningRef.current) return;

//       // fondo con “trails”
//       ctx.fillStyle = fadeRef.current;
//       ctx.fillRect(
//         0,
//         0,
//         canvas.width / dprRef.current,
//         canvas.height / dprRef.current
//       );

//       // texto
//       ctx.fillStyle = colorRef.current;
//       ctx.font = `${fontSize}px monospace`;

//       const cols = columnsRef.current;
//       for (let i = 0; i < cols; i++) {
//         const drop = dropsRef.current[i];
//         if (!drop) continue;
//         // columnas inactivas (y=-9999) se saltan
//         if (drop.y < 0) continue;

//         const text =
//           letters.current[(Math.random() * letters.current.length) | 0];
//         ctx.fillText(text, i * fontSize, drop.y * fontSize);

//         drop.y += drop.speed;

//         // reinicio aleatorio cuando pasa el límite
//         if (
//           drop.y * fontSize > canvas.height / dprRef.current &&
//           Math.random() > 0.975
//         ) {
//           drop.y = 0;
//           drop.speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
//         }
//       }

//       animationRef.current = requestAnimationFrame(draw);
//     };

//     animationRef.current = requestAnimationFrame(draw);

//     // Pausar cuando la pestaña no está visible
//     const onVis = () => {
//       const visible = document.visibilityState === "visible";
//       runningRef.current = visible;
//       if (visible && !animationRef.current) {
//         animationRef.current = requestAnimationFrame(draw);
//       }
//     };
//     document.addEventListener("visibilitychange", onVis);

//     return () => {
//       runningRef.current = false;
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//       animationRef.current = null;
//       document.removeEventListener("visibilitychange", onVis);
//     };
//   }, [fontSize, minSpeed, maxSpeed]);

//   return (
//     <div ref={wrapperRef} aria-hidden="true" role="presentation">
//       <canvas
//         ref={canvasRef}
//         // height/width reales del backing store se ajustan en efecto de resize
//         style={{ width: "100%", height, display: "block" }}
//       />
//     </div>
//   );
// }

import { useEffect, useRef } from "react";

interface MatrixRainProps {
  height?: number; // Altura visible (CSS) en px
  color?: string; // Color de caracteres
  backgroundFade?: string; // Trail (usa el mismo tono base que el fondo)
  fontSize?: number; // px lógicos
  density?: number; // 0..1 columnas activas
  minSpeed?: number; // filas/frame mín
  maxSpeed?: number; // filas/frame máx
  useContainerWidth?: boolean; // true: toma el ancho del contenedor
  showEdgeFades?: boolean; // degradao suave en bordes
}

export default function MatrixRain({
  height = 290,
  color = "#00c9a7",
  backgroundFade = "rgba(255,255,255,0.05)", // si el fondo no es blanco, ajusta
  fontSize = 16,
  density = 1,
  minSpeed = 0.75,
  maxSpeed = 1.75,
  useContainerWidth = false,
  showEdgeFades = true,
}: MatrixRainProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // refs vivos para no reiniciar animación en cambios de color/fade
  const colorRef = useRef(color);
  const fadeRef = useRef(backgroundFade);

  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationRef = useRef<number | null>(null);
  const dropsRef = useRef<Array<{ y: number; speed: number }>>([]);
  const columnsRef = useRef<number>(0);
  const dprRef = useRef<number>(1);
  const runningRef = useRef<boolean>(true);

  const letters = useRef<string[]>("f r d e g i 1 2 3 4 5".split(" "));

  // Actualiza refs sin romper el loop
  useEffect(() => {
    colorRef.current = color;
  }, [color]);
  useEffect(() => {
    fadeRef.current = backgroundFade;
  }, [backgroundFade]);

  // Resize con DPR y (opcional) ResizeObserver del contenedor
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr =
        typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      dprRef.current = dpr;

      // Ancho lógico objetivo
      const logicalWidth =
        useContainerWidth && wrapperRef.current
          ? Math.max(1, Math.floor(wrapperRef.current.clientWidth))
          : Math.max(1, Math.floor(window.innerWidth));

      // Overscan para evitar cortes (8px extra, oculto con overflow)
      const overscan = 8;

      // Dimensiones CSS
      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${height + overscan}px`;

      // Backing store (toma DPR)
      canvas.width = Math.floor(logicalWidth * dpr);
      canvas.height = Math.floor((height + overscan) * dpr);

      let ctx = ctxRef.current;
      if (!ctx) {
        ctx = canvas.getContext("2d");
        ctxRef.current = ctx;
      }
      if (!ctx) return;

      // Reset y escala a px lógicos
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Recalcular columnas
      const cols = Math.max(1, Math.floor(logicalWidth / fontSize));
      columnsRef.current = cols;

      // (Re)construir drops respetando densidad, conservando prev cuando posible
      const next: Array<{ y: number; speed: number }> = new Array(cols)
        .fill(null)
        .map((_, i) => {
          const prev = dropsRef.current[i];
          const active = Math.random() < density;
          if (prev && active) return prev;
          const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
          const startY = Math.floor(
            Math.random() * ((height + overscan) / fontSize)
          );
          return { y: active ? startY : -9999, speed };
        });

      dropsRef.current = next;
    };

    resize();

    let ro: ResizeObserver | null = null;
    if (
      useContainerWidth &&
      typeof ResizeObserver !== "undefined" &&
      wrapperRef.current
    ) {
      ro = new ResizeObserver(resize);
      ro.observe(wrapperRef.current);
    } else {
      window.addEventListener("resize", resize);
    }

    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [height, fontSize, density, minSpeed, maxSpeed, useContainerWidth]);

  // Animación
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    runningRef.current = true;

    const draw = () => {
      if (!runningRef.current) return;

      const logicalW = canvas.width / dprRef.current;
      const logicalH = canvas.height / dprRef.current;

      // FIX 1: fondo base (mismo color que el fondo de la sección)
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#ffffff"; // ajusta si tu sección no es blanca
      ctx.fillRect(0, 0, logicalW, logicalH);

      // trails
      ctx.fillStyle = fadeRef.current;
      ctx.fillRect(0, 0, logicalW, logicalH);

      // texto
      ctx.fillStyle = colorRef.current;
      ctx.font = `${fontSize}px monospace`;

      const cols = columnsRef.current;
      for (let i = 0; i < cols; i++) {
        const drop = dropsRef.current[i];
        if (!drop || drop.y < 0) continue;

        const text =
          letters.current[(Math.random() * letters.current.length) | 0];
        ctx.fillText(text, i * fontSize, drop.y * fontSize);

        drop.y += drop.speed;

        // reinicio aleatorio al pasar el límite
        if (drop.y * fontSize > logicalH && Math.random() > 0.975) {
          drop.y = 0;
          drop.speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    const onVis = () => {
      const visible = document.visibilityState === "visible";
      runningRef.current = visible;
      if (visible && !animationRef.current) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      runningRef.current = false;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [fontSize, minSpeed, maxSpeed]);

  // Overscan wrapper + fades en bordes
  const overscanWrapperStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    height, // altura visible exacta
  };

  return (
    <div
      ref={wrapperRef}
      style={overscanWrapperStyle}
      aria-hidden="true"
      role="presentation"
    >
      <canvas
        ref={canvasRef}
        className="block w-full"
        // altura real del canvas = height + overscan (se setea en el efecto)
      />
      {showEdgeFades && (
        <>
          {/* Fade superior */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0"
            style={{
              height: 12,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))",
            }}
          />
          {/* Fade inferior */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0"
            style={{
              height: 12,
              background:
                "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
            }}
          />
        </>
      )}
    </div>
  );
}
