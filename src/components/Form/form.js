import React, { useState } from "react"
import {
  FormWrap,
  FormBehind,
  FormTitle,
  FieldsWrap,
  WrapPipe,
} from "./styles.js"
import { Helmet } from "react-helmet"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = ({ title }) => {
  const [ime, setIme] = useState("")
  const [email, setEmail] = useState("")
  const [imeObjekta, setImeObjekta] = useState("")
  const [brojTelefona, setBrojTelefona] = useState("")
  const [recieveNewsletter, setRecieveNewsletter] = useState(true)
  const [state, setState] = useState({
    ime: "",
  })

  const handleSubmit = e => {
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...state }),
    // })
    //   .then(() => alert("Success!"))
    //   .catch(error => alert(error))
    // e.preventDefault()
  }

  return (
    <>
      {/* <FormWrap>
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
              <input
                type="checkbox"
                defaultChecked="checked"
                name="recieveNewsletter"
              />
              <span className="checkmark"></span>
            </label>
            <input
              className="submitButton"
              value="KONTAKTIRAJ ME "
              type="submit"
            />
          </form>
        </FieldsWrap>
      
      </FormWrap> */}
      <FormWrap>
        <FormTitle>
          Ispuni podatke danas - Udvostruči prihode, iskorisiti prilike.
        </FormTitle>

        <FieldsWrap>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ime i Prezime"
              name="ime"
              required
              value={ime}
              onChange={e => setIme(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ime objekta"
              name="imeObjekta"
              required
              value={imeObjekta}
              onChange={e => setImeObjekta(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Broj telefona"
              name="brojTelefona"
              required
              value={brojTelefona}
              onChange={e => setBrojTelefona(e.target.value)}
            />{" "}
            <label className="container">
              Želim primati Rentlio newsletter za hotele
              <input
                type="checkbox"
                defaultChecked="checked"
                name="recieveNewsletter"
                value={recieveNewsletter}
                onChange={e => setRecieveNewsletter(e.target.value)}
              />
              <span className="checkmark"></span>
            </label>
            <button type="submit">KONTAKTIRAJ ME </button>
            {/* <input
              className="submitButton"
              value="KONTAKTIRAJ ME "
              type="submit"
            /> */}
          </form>
        </FieldsWrap>
      </FormWrap>
      <FormBehind />
    </>
  )
}

export default Form
