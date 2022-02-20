import React from "react"
import { PhotoComp } from "./styles.js"
import { useInView } from "react-intersection-observer"

const Photo = ({ image }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <PhotoComp ref={ref} className={`section ${inView ? " is-visible" : ""} `}>
      <img src={image} alt="" />
    </PhotoComp>
  )
}

export default Photo
