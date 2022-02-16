import React from "react"
import {
  TestimonialWrap,
  ContentWrap,
  Stars,
  Title,
  Paragraph,
  AvatarContent,
  WrapNameCredential,
  GradientBottomLine,
  Name,
  Credential,
} from "./styles.js"
import Guy from "../../images/fotoGuy.png"
import Lottie from "lottie-react"
import animationStars from "./animationStars"
import { useInView } from "react-intersection-observer"
import gradientAnimation from "./animation"
const Testimonial = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <TestimonialWrap>
      <ContentWrap>
        <Stars>
          <Lottie animationData={animationStars} autoPlay={true} loop={false} />
          {/* <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" /> */}
        </Stars>
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
