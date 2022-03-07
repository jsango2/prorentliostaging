import React from "react"
import { Helmet } from "react-helmet"
import { FormWrap, FormBehind, FormTitle, FieldsWrap } from "./styles.js"

const Form = ({ title }) => {
  return (
    <>
      <Helmet>
        <script src="https://webforms.pipedrive.com/f/loader"></script>
      </Helmet>
      <FormWrap>
        {/* <FormTitle></FormTitle>

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
              value="KONTAKTIRAJ ME"
              type="submit"
            />
          </form>
        </FieldsWrap> */}
        <div
          className="pipedriveWebForms"
          data-pd-webforms="https://webforms.pipedrive.com/f/JJX6B6Lc6P3UBwqFymiXk3rK8vxUcKI88zr6IyurUq7FDYr4tjVWYHJUOZUSeTV"
        ></div>
      </FormWrap>
    </>
  )
}

export default Form
