import React from "react"
import { WrapIntegrationsSection, Title, Text, Logos, Image } from "./styles.js"
import p1 from "../../../static/images/remaris.png"
import p2 from "../../../static/images/gastrobit.png"
import p3 from "../../../static/images/ritam.png"
import p4 from "../../../static/images/monri.png"

const Integrations = () => {
  return (
    <WrapIntegrationsSection className="box">
      <Title>Spajanje servis, software</Title>
      <Text>
        Preuzmite kontrolu i povežite komunikacijske, računovodstvene,
        ugostiteljske i ostale usluge koje donose pravu vrijednost vašim
        hotelskim operacijama. 
      </Text>
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
    </WrapIntegrationsSection>
  )
}

export default Integrations
