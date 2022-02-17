import React from "react"
import {
  Box,
  BoxGreenTitle,
  Title,
  Paragraph,
  TextBox,
  Photo,
  BlueNumber,
  WrapTitle,
} from "./styles.js"
import { useInView } from "react-intersection-observer"

const Fact = ({ titleUp, title, text, slide, image }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <Box>
      <TextBox ref={ref}>
        <WrapTitle>
          <BoxGreenTitle>{titleUp}</BoxGreenTitle>
          <BlueNumber
            className={` ${
              inView ? "scale-up-hor-left" : "scale-up-hor-left-start"
            }`}
          >
            <span className={` ${inView ? "fade-in" : ""}`}>{slide}</span>
          </BlueNumber>
        </WrapTitle>

        <Title>{title}</Title>
        <Paragraph>{text}</Paragraph>
      </TextBox>
      <Photo>
        <img src={image} alt="photo 1" />
      </Photo>
    </Box>
  )
}

export default Fact
