import React from "react"
import { PhotoComp, PhotoOverlay } from "./styles.js"
import { useInView } from "react-intersection-observer"

const Photo = ({ image, imageBg, position, imageTop, imageLeft }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <PhotoComp
      photo={imageBg}
      position={position}
      ref={ref}
      className={`section ${inView ? " is-visible" : ""} `}
    >
      <PhotoOverlay
        imageTop={imageTop}
        imageLeft={imageLeft}
        className={`sectionOverlay ${inView ? " photoStart" : "photoEnd"} `}
      >
        <img src={image} alt="" width="115%" />
      </PhotoOverlay>
    </PhotoComp>
  )
}

export default Photo
