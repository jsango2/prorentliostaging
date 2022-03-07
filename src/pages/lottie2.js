import React, { useRef, useState, useEffect } from "react"
import lottie from "lottie-web"
import animationData from "../components/lottieTest/rimac2.json"
import { useSpring, animated, to } from "@react-spring/web"
import { useGesture } from "@use-gesture/react"
import Hammer from "react-hammerjs"

const LottieControl = () => {
  const [pinc, setPinc] = useState(1)
  const [newdata, setNewData] = useState()
  const target = useRef(null)
  const lottieRef = React.useRef(null)
  const myRef = React.useRef(null)
  const [{ d, a }, api] = useSpring(() => ({
    config: { mass: 1115, tension: 11, friction: 1 },
  }))
  let ts
  // useGesture(
  //   {
  //     onPinch: ({
  //       origin: [ox, oy],
  //       first,
  //       movement: [ms],
  //       offset: [s, a],
  //       lastOffset,
  //       memo,
  //       distance: [dr],
  //       delta,
  //     }) => {
  //       window.scrollTo({
  //         top: s + 1,
  //         behavior: "smooth",
  //       })
  //     },
  //   },

  //   {
  //     target,
  //     eventOptions: { passive: false },
  //   }
  // )

  // React.useEffect(() => {
  //   var animDuration = 1000
  //   const anim = lottie.loadAnimation({
  //     container: lottieRef.current,
  //     //   renderer: "svg",
  //     loop: true,
  //     autoplay: false,

  //     animationData,
  //   })
  //   console.log(document.body.scrollHeight)
  //   function animatebodymovin(duration) {
  //     let scrollPosition = window.scrollY
  //     if (scrollPosition >= 9200) {
  //       window.scrollTo({
  //         top: 0,
  //         // behavior: "smooth",
  //       })
  //     }
  //     // const scrollPosition = pinc
  //     const maxFrames = anim.totalFrames
  //     // const frame = (maxFrames / 1) * ((scrollPosition/1000) / (duration *10));
  //     const frame = (maxFrames / 1) * (scrollPosition / 10 / duration)
  //     console.log(maxFrames, frame)
  //     anim.goToAndStop(frame, true)
  //   }
  //   animatebodymovin(animDuration)
  //   const onScroll = () => {
  //     animatebodymovin(animDuration)
  //   }

  //   document.addEventListener("scroll", onScroll)

  //   return () => {
  //     anim.destroy()
  //     document.removeEventListener("scroll", onScroll)
  //   }
  // }, [])
  var options = {
    touchAction: "compute",
    recognizers: {
      pinch: { enable: true },
    },
  }
  const handlePinch = () => {
    console.log("pinched")
  }
  return (
    <Hammer
      onPinch={handlePinch}
      options={{
        recognizers: {
          pinch: { enable: true },
        },
      }}
    >
      <div>TEST</div>
    </Hammer>
  )
}

export default LottieControl
