import React from "react"
import {
  WrapFormBottom,
  TextBox,
  FormBox,
  TwoFacts,
  Fact,
  Title,
  IspuniPodatke,
} from "./styles.js"
import Yes from "../../../static/images/yes.svg"
import Form from "./Form/form.js"
import { useInView } from "react-intersection-observer"

const FormBottom = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <WrapFormBottom>
      <TextBox ref={ref}>
        <Title>Pametno upravljajte svakim aspektom vašeg poslovanja</Title>
        <TwoFacts
          className={` ${
            inView ? "formBottomAnimation" : "formBottomAnimationNone"
          }`}
        >
          <Fact>
            <img src={Yes} alt="yes" style={{ marginRight: "20px" }} />
            Udvostručenje prihoda u prvoj godini korištenja
          </Fact>
          <Fact>
            <img src={Yes} alt="yes" style={{ marginRight: "20px" }} />
            Potpuno rješenje za upravljanje hotelom
          </Fact>
          <IspuniPodatke>
            Ispuni podatke i ostvari pun potencijal!
          </IspuniPodatke>
        </TwoFacts>
      </TextBox>
      <FormBox>
        <Form />
      </FormBox>
    </WrapFormBottom>
  )
}

export default FormBottom
