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
        title="Jedan sustav za sve hotelske operacije"
        textUp="Uz Rentlio PMS i Channel Manager svi OTA kanali su u potpunosti sinkronizirani. Centralni kalendar omogućuje recepciji efikasnije i jednostavnije upravljanje rezervacijama, ažuriranje cijena i upravljanje dostupnošću i restrikcijama u samo par klikova. "
        textDown=""
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
        slide="3 minute za odgovor"
        title="Lokalna podrška vama na usluzi"
        textUp="Na vaš upit odgovaramo u samo 3 minute."
        textDown="99% razgovora Rentlio korisničke podrške korisnici su ocijenili izvanrednim ili odličnim ocjenama. Uz vrhunsku korisničku podršku, naš onboarding tim pomoći će Vam u postavljanju hotela na Rentlio Pro te u edukaciji Vaših timova. "
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
        title="Ostvarite veće prihode"
        textUp="OTA kanali u prosjeku naplaćuju 15-30% provizije. "
        textDown="Rentlio Booking Engine-a omogućuju Vam ostvarivanje većeg broja direktnih rezervacija i dodatnih prihoda uz samo 2% provizije. Centralizacijom upita i s više direktnih rezervacija  vaši prihodi mogu porasti i do 25%. "
        imageBg={p3bg}
        position="70% 50%"
      />
      <Fact
        key={4}
        titleUp="Fleksibilno"
        slide="Izvještaji u <30 sekundi"
        title="Izvještaji na dohvat ruke"
        textUp="Rentlio vam omogućuje direktan i transparentan uvid u uspješnost poslovanja i mogućnost brzog generiranja tjednih, mjesečnih i godišnjih izvještaja. "
        textDown="Jednostavan pristup podacima poput prihoda, popunjenosti kapaciteta, broju prodanih noćenja, udjelu rezervacija po zemljama i kanalima prodaje pomoći će vam u donošenju strateških poslovnih odluka."
        imageBg={p4bg}
        position="0% 0%"
        width="900"
      />
    </FourFactsWrap>
  )
}

export default FourFacts
