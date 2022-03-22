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
import Guy from "../../images/fotoGuy.png"
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
          “Prelazak s postojećeg sustava na Rentlio bio je kao prelazak s Nokie
          3310 na iPhone 13 PRO.”
        </Title>
        {/* <Paragraph>
          They have amazing support, always ready to help. Product is very
          intuitive and well structured. Rentlio allowed us to make everything
          automatic
        </Paragraph> */}
        <AvatarContent>
          <img src={Guy} alt="Guy" width="80" height="80" />
          <WrapNameCredential>
            <Name>Tomislav Buljubašić</Name>
            <Credential>Hotel manager, Valamar Isabella Miramare</Credential>
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
