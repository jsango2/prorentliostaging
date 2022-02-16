import React from "react"
import {
  SupportWrap,
  Button,
  Podrska,
  Paragraph,
  WrapNumbers,
  Box,
  Number,
  Text,
} from "./styles.js"

const Support = () => {
  return (
    <SupportWrap>
      <Button>Pouzdano</Button>
      <Podrska>Podrška u svakom trenu, na svakom koraku.</Podrska>
      <Paragraph>
        Hotelijerska industrija je jedna od najdinamičnijih industrija, te smo
        svjesni važnosti dostupnosti i odgovora u kratkom vremenskom periodu.
        Kroz 2021. godinu, medijan vrijeme za prvi odgovor je bio 3 minute i 36
        sekundi, a za uspiješno riješen probem 5 sati i 13 minuta.{" "}
      </Paragraph>
      <WrapNumbers>
        <Box>
          <Number>99,98%</Number>
          <Text>Vrijeme rada</Text>
        </Box>
        <Box>
          <Number>5</Number>
          <Text>Prosječni broj nadogradnji svaki mjesec</Text>
        </Box>{" "}
        <Box>
          <Number>3 min</Number>
          <Text>Prosječno vrijeme za odgovor na vaša pitanja</Text>
        </Box>{" "}
        <Box>
          <Number>99%</Number>
          <Text>Razgovora ocijenjeno s odličnim</Text>
        </Box>
      </WrapNumbers>
    </SupportWrap>
  )
}

export default Support
