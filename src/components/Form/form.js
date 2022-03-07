import React from "react"
import {
  FormWrap,
  FormBehind,
  FormTitle,
  FieldsWrap,
  WrapPipe,
} from "./styles.js"
import { Helmet } from "react-helmet"

const Form = ({ title }) => {
  return (
    <>
      <Helmet>
        <script src="https://webforms.pipedrive.com/f/loader"></script>
      </Helmet>
      <FormWrap>
        <FormTitle>
          Ispuni podatke danas - Udvostruči prihode, iskorisiti prilike.
        </FormTitle>

        <FieldsWrap>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              placeholder="Ime i Prezime"
              name="ime"
              required
            />
            <input type="email" placeholder="Email" name="email" required />
            <input
              type="text"
              placeholder="Ime objekta"
              name="ime objekta"
              required
            />
            <input
              type="tel"
              placeholder="Broj telefona"
              name="broj telefona"
              required
            />{" "}
            <label className="container">
              Želim primati Rentlio newsletter za hotele
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark"></span>
            </label>
            <input
              className="submitButton"
              value="KONTAKTIRAJ ME "
              type="submit"
            />
          </form>
        </FieldsWrap>
        {/* <WrapPipe
          className="pipedriveWebForms"
          data-pd-webforms="https://webforms.pipedrive.com/f/JJX6B6Lc6P3UBwqFymiXk3rK8vxUcKI88zr6IyurUq7FDYr4tjVWYHJUOZUSeTV"
        ></WrapPipe> */}
      </FormWrap>
      <FormBehind />
    </>
  )
}

export default Form
