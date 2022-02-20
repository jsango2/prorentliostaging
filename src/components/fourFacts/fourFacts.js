import React from "react"

import p1 from "../../../static/images/facts1.png"
import p2 from "../../../static/images/facts2.png"
import p3 from "../../../static/images/facts3.png"
import p4 from "../../../static/images/facts4.png"
import Fact from "./fact"
import { FourFactsWrap } from "./styles.js"

const FourFacts = () => {
  return (
    <FourFactsWrap>
      <Fact
        key={1}
        titleUp="Efikasno"
        slide="80% manje administracije"
        title="Odvojeni sustavi, a može jedan?"
        textUp="Rezervacija nije vidljiva i izmjene nisu evidentirane? Česti overbooking? Gost je stigao, ali rezervacija nije?"
        textDown="Rentlio je cjelovito PMS, channel manager i booking engine cloud rješenje koje ne trpi navedene probleme."
        image={p1}
      />
      <Fact
        key={2}
        titleUp="Pouzdano"
        slide="3:36 minute za odgovor"
        title="Odgovor podrške čekate tjednima? "
        textUp="Zaobilazite probleme jer od slanja upita nema ništa? "
        textDown="99% razgovora Rentlio korisničke podrške naši su korisnici ocijenili izvanrednim ili odličnim ocjenama, a na upite odgovaramo u roku od samo 3 minute."
        image={p2}
      />
      <Fact
        key={3}
        titleUp="Profitabilno"
        slide="25% viši prihodi"
        title="Propuštate prihode?"
        textUp="Hotelski sustav funkcionira kao da su još devedesete, samo zbrajate propuštene šanse za više prihode?  "
        textDown="Samo centralizacijom upita, uz moderni Rentlio Booking Engine, prihodi će porasti za 25%."
        image={p3}
      />
      <Fact
        key={4}
        titleUp="Fleksibilno"
        slide=""
        title="Izvještaji kasne satima?"
        textUp="Vrijeme je novac, a vi tratite vrijeme čekajući izvještaje sa ne usklađenim podacima satima? "
        textDown="Pristupite pouzdanim podacima i izvješćima u roku jednog klika uz rentlio 3 u 1 rješenje."
        image={p4}
      />
    </FourFactsWrap>
  )
}

export default FourFacts
