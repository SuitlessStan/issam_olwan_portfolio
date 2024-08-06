import React, { useRef, useEffect, ReactNode } from "react"
import anime from "animejs"
import "../app/lens-effect.css"

interface LensEffectTextProps {
  children: ReactNode
}

const LensEffectText = ({ children }: LensEffectTextProps) => {
  const textRef = useRef<any>(null)

  useEffect(() => {
    const textElement = textRef.current

    const handleMouseEnter = (event: Event) => {
      anime({
        targets: textElement,
        scale: 1.1,
        duration: 300,
        easing: "easeInOutQuad",
      })
    }

    const handleMouseLeave = (event: Event) => {
      anime({
        targets: textElement,
        scale: 1,
        duration: 300,
        easing: "easeInOutQuad",
      })
    }

    textElement?.addEventListener("mouseenter", handleMouseEnter)
    textElement?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      textElement?.removeEventListener("mouseenter", handleMouseEnter)
      textElement?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="text-container">
      <h1 ref={textRef} className="lens-effect-text">
        {children}
      </h1>
    </div>
  )
}

export default LensEffectText
