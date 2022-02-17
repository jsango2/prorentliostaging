import React from "react"
import {
  FourFactsWrap,
  Box,
  BoxGreenTitle,
  Title,
  Paragraph,
  TextBox,
  Photo,
  BlueNumber,
  WrapTitle,
} from "./styles.js"
import p1 from "../../../public/images/facts1.png"
import p2 from "../../../public/images/facts2.png"
import p3 from "../../../public/images/facts3.png"
import p4 from "../../../public/images/facts4.png"

const FourFacts = () => {
  return (
    <FourFactsWrap>
      <Box>
        <TextBox>
          <WrapTitle>
            <BoxGreenTitle>Efikasno</BoxGreenTitle>
            <BlueNumber>80% manje administracije</BlueNumber>
          </WrapTitle>

          <Title>Odvojeni sustavi, a može jedan?</Title>
          <Paragraph>
            Rezervacija nije vidljiva i izmjene nisu evidentirane? Česti
            overbooking? Gost je stigao, ali rezervacija nije? <br />
            <br />
            Rentlio je cjelovito PMS, channel manager i booking engine cloud
            rješenje koje ne trpi navedene probleme.
          </Paragraph>
        </TextBox>
        <Photo>
          <img src={p1} alt="photo 1" />
        </Photo>
      </Box>
      <Box>
        <Photo>
          <img src={p2} alt="photo 2" />
        </Photo>
        <TextBox>
          <WrapTitle>
            <BoxGreenTitle>Pouzdano</BoxGreenTitle>
            <BlueNumber>3:36 minute za odgovor</BlueNumber>
          </WrapTitle>
          <Title>Odgovor podrške čekate tjednima? </Title>
          <Paragraph>
            Zaobilazite probleme jer od slanja upita nema ništa?
            <br />
            <br />
            99% razgovora Rentlio korisničke podrške naši su korisnici ocijenili
            izvanrednim ili odličnim ocjenama, a na upite odgovaramo u roku od
            samo 3 minute.
          </Paragraph>
        </TextBox>
      </Box>
      <Box>
        <TextBox>
          <WrapTitle>
            <BoxGreenTitle>Profitabilno</BoxGreenTitle>
            <BlueNumber>25% viši prihodi</BlueNumber>
          </WrapTitle>
          <Title>Propuštate prihode?</Title>
          <Paragraph>
            Hotelski sustav funkcionira kao da su još devedesete, samo zbrajate
            propuštene šanse za više prihode?
            <br />
            <br />
            Samo centralizacijom upita, uz moderni Rentlio Booking Engine,
            prihodi će porasti za 25%.
          </Paragraph>
        </TextBox>
        <Photo>
          <img src={p3} alt="photo 3" />
        </Photo>
      </Box>
      <Box>
        {" "}
        <Photo>
          <img src={p4} alt="photo 4" />
        </Photo>
        <TextBox>
          <WrapTitle>
            <BoxGreenTitle>Fleksibilno</BoxGreenTitle>
            <BlueNumber style={{ width: "300px" }} />
          </WrapTitle>
          <Title>Izvještaji kasne satima?</Title>
          <Paragraph>
            Vrijeme je novac, a vi tratite vrijeme čekajući izvještaje sa ne
            usklađenim podacima satima?
            <br />
            <br />
            Pristupite pouzdanim podacima i izvješćima u roku jednog klika uz
            rentlio 3 u 1 rješenje.
          </Paragraph>
        </TextBox>
      </Box>
    </FourFactsWrap>
  )
}

export default FourFacts
