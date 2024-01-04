import Image from "next/image";
import { Inter } from "next/font/google";
import { useRef, useState } from "react";
import { useDraw } from "@/common/hooks/drawing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D>();

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [options, setOptions] = useState<CtxOptions>({
    lineColor: "#000",
    lineWidth: 5,
  });

  const { handleStartDrawing, handleDraw, handleEndDrawing, drawing } =
    useDraw();

  return (
    <div>
      <h1 className="bg-red-500">Template</h1>
    </div>
  );
}
