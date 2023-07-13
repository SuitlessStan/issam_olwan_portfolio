import React, { useEffect, useRef } from "react"

type Point = {
  x: number
  y: number
  value: string
  speed: number
}

const MatrixEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const charArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  const fontSize = 10
  const fallingCharArr: Point[] = []

  useEffect(() => {
    const maxColumns = Math.floor(window.innerWidth / fontSize)
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    const cw = window.innerWidth
    const ch = window.innerHeight

    if (!canvas || !ctx) {
      return
    }

    canvas.width = cw
    canvas.height = ch

    const randomInt = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min) + min)
    }

    const randomFloat = (min: number, max: number): number => {
      return Math.random() * (max - min) + min
    }

    for (let i = 0; i < maxColumns; i++) {
      fallingCharArr.push({
        x: i * fontSize,
        y: randomFloat(-500, 0),
        value: "",
        speed: 0,
      })
    }

    const update = (): void => {
      if (!ctx) {
        return
      }

      ctx.fillStyle = "rgba(0,0,0,0.05)"
      ctx.fillRect(0, 0, cw, ch)

      fallingCharArr.forEach((point) => {
        point.value = charArr[randomInt(0, charArr.length - 1)].toUpperCase()
        point.speed = randomFloat(1, 5)

        ctx.fillStyle = "#3d8c40"
        ctx.font = fontSize + "px san-serif"
        ctx.fillText(point.value, point.x, point.y)

        point.y += point.speed
        if (point.y > ch) {
          point.y = randomFloat(-100, 0)
          point.speed = randomFloat(2, 5)
        }
      })

      requestAnimationFrame(update)
    }

    const animationId = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div>
      <canvas
        style={{
          height: "80vh",
          width: "98vw",
          zIndex: -1000,
        }}
        ref={canvasRef}
      />
    </div>
  )
}

export default MatrixEffect
