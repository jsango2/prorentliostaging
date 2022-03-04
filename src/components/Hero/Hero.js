import React from "react"
import Form from "../Form/form.js"

import {
  HeroWrap,
  HeroOverlay,
  LogoHero,
  HeroTitle,
  HeroParagraph,
  HeroParagraph2,
  // GradientBottomLine,
} from "./styles.js"
import Lottie from "lottie-react"
// import gradientAnimation from "../testimonial/animation"
import { ParallaxProvider, useParallax, Parallax } from "react-scroll-parallax"

const Hero = () => {
  return (
    <HeroWrap>
      <HeroOverlay />

      <LogoHero>
        <img src="/images/RentlioLogo.svg" alt="Logo" />
      </LogoHero>
      <HeroTitle>
        Recepcija,
        <br /> imamo problem!
      </HeroTitle>
      <div>
        <HeroParagraph>
          Rezervacije nema u sustavu. Ekran se smrznuo. Korisnička podrška
          nedostupna. Spor check-in. Ručno upisivanje - pa prepisivanje. Red
          ispred recepcije raste. Gosti sve nervozniji.
          <HeroParagraph2>
            <strong>Opet</strong> propuštena prilika zbog zastarjelog hotelskog
            sustava.
          </HeroParagraph2>
        </HeroParagraph>
      </div>

      <Form />
    </HeroWrap>
  )
}

export default Hero
