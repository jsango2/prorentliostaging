import React, { useState, useRef } from "react"
import { useSpring, animated } from "react-spring"
import {
  CardWrap,
  CardTitle,
  CardText,
  Avatar,
  Owner,
  Hotel,
  Stars,
  CardOverlay,
} from "./styles.js"
import stars from "../../../static/images/5stars.svg"
// import useWindowSize from "../helper/useWindowSize"

const Card = ({ title, text, avatar, owner, hotel, overlay, onMouseEnter }) => {
  // const size = useWindowSize()
  const ref = useRef()
  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false)

  // The useSpring hook
  const [animatedProps, api] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 300, friction: 50, precision: 0.00001 },
    }
  })

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseMove={() => {
        const xys = [
          0, // rotateX
          0, // rotateY
          1.03, // Scale
        ]
        // Update values to animate to
        api.start({ xys: xys })
      }}
      onMouseLeave={() => {
        setHovered(false)
        // Set xys back to original
        api.start({ xys: [0, 0, 1] })
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.to((x, y, s) => `scale(${s})`),
      }}
    >
      <CardWrap onMouseEnter={onMouseEnter}>
        <CardTitle>"{title}"</CardTitle>
        <Stars>
          <img src={stars} alt="stars" />
        </Stars>
        <CardText>{text}</CardText>
        <Avatar>
          {" "}
          <img src={avatar} alt="avatar" width="80px" />
        </Avatar>
        <Owner>{owner}</Owner>
        <Hotel>{hotel}</Hotel>
        {}
        {overlay && <CardOverlay />}
      </CardWrap>
    </animated.div>
  )
}

export default Card
