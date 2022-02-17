import React from "react"
import { FormWrap, FormBehind, FormTitle, FieldsWrap } from "./styles.js"

const Form = ({ title }) => {
  return (
    <>
      <FormWrap>
        <FormTitle></FormTitle>

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
            {/* <input
              type="text"
              placeholder="Pozicija"
              name="pozicija"
              required
            /> */}
            <input
              type="text"
              placeholder="Ime objekta"
              name="ime objekta"
              required
            />
            {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
            {/* <input
                style={{ width: "130px" }}
                type="number"
                placeholder="Broj jedinica"
                name="broj jedinica"
                min="1"
                max="999"
                required
              />{" "} */}
            <input
              // style={{ width: "270px" }}
              type="tel"
              placeholder="Broj telefona"
              name="broj telefona"
              required
            />{" "}
            {/* </div> */}
            {/* <input
              type="text"
              placeholder="Koji PMS koristite?"
              name="PMS"
              required
            /> */}
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
        </FieldsWrap>
      </FormWrap>
    </>
  )
}

export default Form
