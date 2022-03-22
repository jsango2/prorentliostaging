import React from "react"
import {
  Box,
  BoxGreenTitle,
  Title1,
  Paragraph,
  TextBox,
  BlueNumber,
  WrapTitle,
} from "./styles.js"
import { useInView } from "react-intersection-observer"
import Photo from "./photo.js"

const Fact = ({
  titleUp,
  title,
  textUp,
  textDown,
  slide,
  image,
  imageBg,
  id,
  position,
  imageTop,
  imageLeft,
  width,
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <Box key={id} ref={ref}>
      <TextBox>
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
        <Title1>{title}</Title1>
        <Paragraph>{textUp}</Paragraph>
        <Paragraph>{textDown}</Paragraph>
      </TextBox>
      <Photo
        image={image}
        imageBg={imageBg}
        position={position}
        imageTop={imageTop}
        imageLeft={imageLeft}
        width={width}
      />
    </Box>
  )
}

export default Fact
