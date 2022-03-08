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

class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ime: "",
      email: "",
      brojTelefona: "",
      imeObjekta: "",
      recieveNewsletter: true,
    }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
    e.preventDefault()
    console.log(this.state)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
    const { ime, email, brojTelefona, imeObjekta, recieveNewsletter } =
      this.state
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
            <form
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              hidden
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="ime" />
              <input type="email" name="email" />
              <input type="text" name="imeObjekta" />
              <input type="tel" name="brojTelefona" />
              <input type="checkbox" name="recieveNewsletter" />
            </form>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Ime i Prezime"
                name="ime"
                required
                value={ime}
                onChange={this.handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                value={email}
                onChange={this.handleChange}
              />
              <input
                type="text"
                placeholder="Ime objekta"
                name="imeObjekta"
                required
                value={imeObjekta}
                onChange={this.handleChange}
              />
              <input
                type="tel"
                placeholder="Broj telefona"
                name="brojTelefona"
                required
                value={brojTelefona}
                onChange={this.handleChange}
              />{" "}
              <label className="container">
                Želim primati Rentlio newsletter za hotele
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="recieveNewsletter"
                  value={recieveNewsletter}
                  onChange={this.handleChange}
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
}

export default Form2
