import React from "react"
import {
  FourFactsWrap,
  Box,
  BoxGreenTitle,
  Title,
  Paragraph,
  TextBox,
  Photo,
} from "./styles.js"

const FourFacts = () => {
  return (
    <FourFactsWrap>
      <Box>
        <TextBox>
          <BoxGreenTitle>Efikasno</BoxGreenTitle>
          <Title>Odvojeni sustavi, a može jedan?</Title>
          <Paragraph>
            Rezervacija nije vidljiva i izmjene nisu evidentirane? Česti
            overbooking? Gost je stigao, ali rezervacija nije? <br />
            <br />
            Rentlio je cjelovito PMS, channel manager i booking engine cloud
            rješenje koje ne trpi navedene probleme.
          </Paragraph>
        </TextBox>
        <Photo></Photo>
      </Box>
      <Box>
        <Photo></Photo>
        <TextBox>
          <BoxGreenTitle>Pouzdano</BoxGreenTitle>
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
          <BoxGreenTitle>Profitabilno</BoxGreenTitle>
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
        <Photo></Photo>
      </Box>
      <Box>
        {" "}
        <Photo></Photo>
        <TextBox>
          <BoxGreenTitle>Fleksibilno</BoxGreenTitle>
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
