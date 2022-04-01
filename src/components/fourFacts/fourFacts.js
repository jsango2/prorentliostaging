import React from "react"

import p1 from "../../../static/images/facts1.png"
import pbg from "../../../static/images/facts1bg.png"
import p2 from "../../../static/images/facts2.png"
import p2bg from "../../../static/images/facts2bg.png"
import p3bg from "../../../static/images/facts3bg.png"
import p4bg from "../../../static/images/facts4bg.png"
import Fact from "./fact"
import { FourFactsWrap } from "./styles.js"

const FourFacts = () => {
  return (
    <FourFactsWrap>
      <Fact
        key={1}
        titleUp="Efikasno"
        slide="80% manje administracije"
        title="Koristite više sustava - umjesto jednog?"
        textUp="Rezervacija nije vidljiva i izmjene nisu evidentirane? Česti overbooking? Gost je stigao, ali rezervacija nije?"
        textDown="Rentlio je cjelovito PMS, channel manager i booking engine cloud rješenje koje ne trpi navedene probleme."
        image={p1}
        imageBg={pbg}
        position="50% 27%"
        imageTop="0"
        imageLeft="227px"
        width="56%"
      />
      <Fact
        key={2}
        titleUp="Pouzdano"
        slide="3:36 minute za odgovor"
        title="Odgovor podrške čekate tjednima? "
        textUp="Zaobilazite probleme jer od slanja upita nema ništa? "
        textDown="99% razgovora Rentlio korisničke podrške naši su korisnici ocijenili izvanrednim ili odličnim ocjenama, a na upite odgovaramo u roku od samo 3 minute."
        imageBg={p2bg}
        image={p2}
        position="50% 0%"
        imageTop="150px"
        imageLeft="216px"
      />
      <Fact
        key={3}
        titleUp="Profitabilno"
        slide="25% viši prihodi"
        title="Propuštate prihode?"
        textUp="Vaš hotelski sustav funkcionira kao da su još devedesete, samo zbrajate propuštene šanse za više prihode?"
        textDown="Samo centralizacijom upita i uz moderni Rentlio Booking Engine, vaši prihodi će porasti za 25%."
        imageBg={p3bg}
        position="70% 50%"
      />
      <Fact
        key={4}
        titleUp="Fleksibilno"
        slide="Izvještaji u <30 sekundi"
        title="Izvještaji kasne satima?"
        textUp="Tratite vrijeme danima čekajući izvještaje pune neusklađenih podataka? "
        textDown="Pristupite pouzdanim podacima i izvješćima u roku jednog klika uz rentlio 3 u 1 rješenje."
        imageBg={p4bg}
      />
    </FourFactsWrap>
  )
}

export default FourFacts
