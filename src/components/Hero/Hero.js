import React from "react"

import {
  HeroWrap,
  HeroOverlay,
  LogoHero,
  HeroTitle,
  HeroParagraph,
  HeroParagraph2,
} from "./styles.js"
import Form2 from "../Form/form2.js"

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
          ispred recepcije raste. Gosti sve nervozniji. Opet propuštena prilika
          zbog zastarjelog hotelskog sustava.
          <HeroParagraph2>
            <strong>Odbrojavanje za Rentlio Pro je počelo.</strong>
          </HeroParagraph2>
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
