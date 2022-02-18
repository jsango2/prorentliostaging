import React from "react"
import {
  WrapFormBottom,
  TextBox,
  FormBox,
  ThreeFacts,
  Fact,
  Title,
} from "./styles.js"
import Yes from "../../../static/images/yes.svg"
import Form from "./Form/form.js"
import { useInView } from "react-intersection-observer"

const FormBottom = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.7,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <WrapFormBottom>
      <TextBox ref={ref}>
        <Title>Vrijeme je za digitalnu transformaciju.</Title>
        <ThreeFacts
          className={` ${
            inView ? "formBottomAnimation" : "formBottomAnimationNone"
          }`}
        >
          <Fact>
            <img src={Yes} alt="yes" style={{ marginRight: "20px" }} />
            Cjelovito rješenje
          </Fact>
          <Fact>
            <img src={Yes} alt="yes" style={{ marginRight: "20px" }} />
            Povećajte prihode za X%
          </Fact>
          <Fact>
            <img src={Yes} alt="yes" style={{ marginRight: "20px" }} />
            Smanjite operativne troškove za x%
          </Fact>
        </ThreeFacts>
      </TextBox>
      <FormBox>
        <Form />
      </FormBox>
    </WrapFormBottom>
  )
}

export default FormBottom
