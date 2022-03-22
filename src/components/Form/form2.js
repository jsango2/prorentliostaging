import React from "react"
import {
  FormWrap,
  FormBehind,
  FormTitle,
  FieldsWrap,
  FormOverlay,
} from "./styles.js"
import logo from "../../../static/images/RentlioLogoTamni.svg"

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
      brojJedinica: "",
      mjesto: "",
      sustav: "",
      showModal: false,
      thanks: false,
    }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    }).then(res => {
      this.setState({ showModal: true })
      setTimeout(() => {
        this.setState({ thanks: true })
      }, 500)
      setTimeout(() => {
        this.setState({
          ime: "",
          email: "",
          brojTelefona: "",
          imeObjekta: "",
          showModal: false,
          thanks: false,
          brojJedinica: "",
          mjesto: "",
          sustav: "",
        })
      }, 5000)
    })

    e.preventDefault()
  }
  onChange = e => {
    const re = /^[0-9\b]+$/
    // this.setState({ brojTelefona: e.target.value })
    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ brojTelefona: e.target.value })
    }
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
    const {
      ime,
      email,
      brojTelefona,
      imeObjekta,
      brojJedinica,
      mjesto,
      sustav,
    } = this.state

    return (
      <>
        <FormWrap>
          <FormTitle>
            Ispuni podatke danas - Udvostruči prihode, iskorisiti prilike.
          </FormTitle>

          <FieldsWrap>
            {/* OVAJ FORM JE SAMO ZA NETLIFY BOTOVE DA PREPOZNAJU FORMULAR */}
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
              <input type="text" name="mjesto" />
              <input type="text" name="sustav" />
              <input type="number" name="brojJedinica" />
              {/* <input type="checkbox" name="recieveNewsletter" /> */}
            </form>
            {/* PRAVI FORM */}
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Ime i prezime"
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
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  placeholder="Mjesto"
                  name="mjesto"
                  required
                  value={mjesto}
                  onChange={this.handleChange}
                  style={{ margin: "0 5px 0 0" }}
                />
                <input
                  type="number"
                  placeholder="Broj jedinica"
                  name="brojJedinica"
                  required
                  value={brojJedinica}
                  onChange={this.handleChange}
                  style={{ margin: "0 0 15px 5px" }}
                />
              </div>
              <input
                type="text"
                placeholder="Koji hotelski sustav koristite?"
                name="sustav"
                required
                value={sustav}
                onChange={this.handleChange}
              />
              <input
                type="text"
                placeholder="Kontakt broj"
                name="brojTelefona"
                required
                value={brojTelefona}
                onChange={this.onChange}
              />{" "}
              {/* <label className="container">
                Želim primati Rentlio newsletter za hotele
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="recieveNewsletter"
                  value={recieveNewsletter}
                  onChange={this.handleChange}
                />
                <span className="checkmark"></span>
              </label> */}
              <button type="submit">KONTAKTIRAJ ME </button>
              {/* <input
              className="submitButton"
              value="KONTAKTIRAJ ME "
              type="submit"
            /> */}
            </form>
          </FieldsWrap>
        </FormWrap>
        {this.state.showModal ? (
          <FormOverlay
            overlayBottom={this.props.overlayBottom}
            overlayRight={this.props.overlayRight}
          >
            <div>Hvala Vam na prijavi!</div>
            <div
              style={{ marginTop: "50px" }}
              className={`modalForm  ${
                this.state.thanks ? "showModal" : "hideModal"
              }`}
            >
              <img src={logo} alt="logos" width="300px" />
            </div>
          </FormOverlay>
        ) : (
          <div></div>
        )}
        {this.props.bg ? <FormBehind /> : ""}
      </>
    )
  }
}

export default Form2
