import React from "react"
import { Helmet } from "react-helmet"
import { FormWrap, FormBehind, FormTitle, FieldsWrap } from "./styles.js"

const Form = ({ title }) => {
  return (
    <>
      <FormWrap>
        <FieldsWrap>
          {/* <form
            // name="contact"
            // method="post"
            // data-netlify="true"
            // data-netlify-honeypot="bot-field"
            // action="/success"
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
              value="KONTAKTIRAJ ME"
              type="submit"
            />
          </form> */}
        </FieldsWrap>
      </FormWrap>
    </>
  )
}

export default Form
