import React, { useRef, useState, useEffect } from "react"
import lottie from "lottie-web"
import animationData from "../components/lottieTest/2022-02 test video lottie druga verzija.json"
import { useSpring, animated, to } from "@react-spring/web"
import { useGesture } from "@use-gesture/react"

const LottieControl = () => {
  const [pinc, setPinc] = useState(1)
  const target = useRef(null)
  const lottieRef = React.useRef(null)
  const [{ d, a }, api] = useSpring(() => ({
    config: { mass: 1115, tension: 11, friction: 1 },
  }))
  let ts
  useGesture(
    {
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s, a],
        lastOffset,
        memo,
        distance: [dr],
        delta,
      }) => (
        window.scrollTo({
          top: Math.pow(s, 1 / 4),
          behavior: "smooth",
        }),
        console.log(ms)
      ),
    },

    {
      target,
      eventOptions: { passive: false },
    }
  )

  React.useEffect(() => {
    var animDuration = 1000
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      //   renderer: "svg",
      loop: true,
      autoplay: false,

      animationData,
    })

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY
      //   const scrollPosition = pinc
      const maxFrames = anim.totalFrames
      // const frame = (maxFrames / 1) * ((scrollPosition/1000) / (duration *10));
      const frame = (maxFrames / 1) * (scrollPosition / 10 / duration)
      anim.goToAndStop(frame, true)
    }
    animatebodymovin(animDuration)
    const onScroll = () => {
      animatebodymovin(animDuration)
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      anim.destroy()
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <animated.div ref={target}>
      <div style={{ height: "10000px" }}>
        <div
          style={{
            position: "fixed",
            height: "100vh",
          }}
          ref={lottieRef}
          id="myElement"
        ></div>
      </div>
    </animated.div>
  )
}

export default LottieControl
