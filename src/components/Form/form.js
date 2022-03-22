import React, { useState } from "react"
import { FormWrap, FormBehind, FormTitle, FieldsWrap } from "./styles.js"

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

  const handleSubmit = e => {}

  return (
    <>
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
