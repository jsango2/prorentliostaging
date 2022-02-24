import React from "react"
import {
  WrapIntegrationsSection,
  Title,
  Text,
  Logos,
  Image,
  SaznajKako,
  Linija,
} from "./styles.js"
import p1 from "../../../static/images/remaris.png"
import p2 from "../../../static/images/hoteza.png"
import p3 from "../../../static/images/minimax.png"
import p4 from "../../../static/images/monri.png"
import Lottie, { useLottie, useLottieInteractivity } from "lottie-react"
import gradientAnimation from "../../components/testimonial/animation"
import { GradientBottomLine } from "../../components/testimonial/styles.js"

const Integrations = () => {
  return (
    <WrapIntegrationsSection className="box">
      <Title>Povežite što želite</Title>
      <Text>
        Bez odugovlačenja, bez dodatnog osoblja - povezivanje bez dodatnih
        naknada. Povežite (sve, baš sve) što vaš hotel treba.
      </Text>
      <SaznajKako>
        <a href="https://rentl.io/integracije">Saznaj kako</a>
        <Linija />
      </SaznajKako>

      <Logos>
        <Image>
          <img src={p1} alt="p1" height="100%" />
        </Image>
        <Image>
          <img src={p2} alt="p2" height="100%" />
        </Image>
        <Image>
          <img src={p3} alt="p3" height="100%" />
        </Image>
        <Image>
          <img src={p4} alt="p4" height="100%" />
        </Image>
      </Logos>
      <GradientBottomLine>
        <Lottie animationData={gradientAnimation} autoPlay={true} loop={true} />
      </GradientBottomLine>
    </WrapIntegrationsSection>
  )
}

export default Integrations
