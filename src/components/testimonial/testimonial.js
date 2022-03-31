import React from "react"
import {
  TestimonialWrap,
  ContentWrap,
  Stars,
  Title,
  AvatarContent,
  WrapNameCredential,
  GradientBottomLine,
  Name,
  Credential,
} from "./styles.js"
import Guy from "../../../static/images/fotoGuy.png"
import Lottie, { useLottie } from "lottie-react"
import animationStars from "./animationStars"
import { useInView } from "react-intersection-observer"
import gradientAnimation from "./animation"

const style = {
  height: 40,
}
const Example = () => {
  const options = {
    animationData: animationStars,
    loop: false,
    autoplay: true,
    initialSegment: [0, 114],
  }

  const { View } = useLottie(options, style)

  return View
}

const Testimonial = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.6,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <TestimonialWrap>
      <ContentWrap ref={ref}>
        <Stars>{inView && <Example />}</Stars>
        <Title>
          “Mi smo u hotelu promijenili tri ili četiri rezervacijska sustava.
          Rentlio je zamijenio sve njih.”
        </Title>
        {/* <Paragraph>
          They have amazing support, always ready to help. Product is very
          intuitive and well structured. Rentlio allowed us to make everything
          automatic
        </Paragraph> */}
        <AvatarContent>
          <img src={Guy} alt="Guy" width="80" height="80" />
          <WrapNameCredential>
            <Name>Jozo Kosir</Name>
            <Credential>CEO, Hotel Jarun</Credential>
          </WrapNameCredential>
        </AvatarContent>
      </ContentWrap>
      <GradientBottomLine>
        <Lottie animationData={gradientAnimation} autoPlay={true} loop={true} />
      </GradientBottomLine>
    </TestimonialWrap>
  )
}

export default Testimonial
