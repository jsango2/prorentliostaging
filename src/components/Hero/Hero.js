import React from "react"

import {
  HeroWrap,
  HeroOverlay,
  LogoHero,
  HeroTitle,
  HeroParagraph,
  HeroSubTitle,
  HeroParagraph2,
} from "./styles.js"
import Form2 from "../Form/form2.js"

const Hero = () => {
  return (
    <HeroWrap>
      <HeroOverlay />

      <LogoHero href="https://www.rentl.io">
        <img src="/images/RentlioLogo.svg" alt="Logo" />
      </LogoHero>
      <HeroTitle>Rentlio Pro</HeroTitle>
      <HeroSubTitle> #1 cloud rješenje za hotele u SEE regiji</HeroSubTitle>
      <div>
        <HeroParagraph>
          Rentilio Pro je moderno cloud PMS, Channel Manager i Booking Engine
          rješenje namijenjeno hotelima svih vrsta i veličina. Proizvod
          predstavlja rješenje koje je dizajnirano sa ciljem da pojednostavi i
          automatizira sve operacije modernih hotelijera i njihovih gostiju.
          {/* <HeroParagraph2>
            <strong>Odbrojavanje za Rentlio Pro je počelo.</strong>
          </HeroParagraph2> */}
        </HeroParagraph>
      </div>

      <Form2
        top="510px"
        right="130px"
        bg={true}
        bgColor="#ffff"
        border="1px solid #eaeaea"
        title={true}
        overlayBottom="-406px"
        overlayRight="150px"
      />
    </HeroWrap>
  )
}

export default Hero
