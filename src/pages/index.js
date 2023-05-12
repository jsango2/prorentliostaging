import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"
import Testimonial from "../components/testimonial/testimonial"
import FourFacts from "../components/fourFacts/fourFacts"
import { graphql } from "gatsby"
import TableSection from "../components/Table/TableSection"
import Clients from "../components/Clients"
import UserLogos from "../components/UserLogos"
import Integrations from "../components/Integrations"
import FormBottom from "../components/FormBottom"
import BlogCards from "../components/BlogCards"
import Footer from "../components/Footer"
import CookieConsent from "react-cookie-consent"
import useWindowSize from "../components/helper/useWindowSize"

const BlogIndex = ({ data, location }) => {
  const size = useWindowSize()
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Prijavi se | Otkrij što Rentlio priprema. Otkrij Rentlio Pro." />
      <Hero />
      <UserLogos />
      {/* <Testimonial /> */}
      <FourFacts />
      <TableSection />
      <Clients />
      <Integrations />
      <FormBottom />
      <BlogCards />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Slažem se"
        cookieName="pro.rentl.io"
        containerClasses="cookieConsent"
        buttonClasses="cookieButton"
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        {size.width > 750 ? (
          <div>
            Koristimo kolačiće radi pružanja najboljeg korisničkog iskustva.
            Pregledavanjem i korištenjem naše internet stranice slažete se s
            korištenjem kolačića u skladu s našim{" "}
            <a href="https://rentl.io/izjava-o-kolacicima">
              Pravilima o korištenju kolačića
            </a>
          </div>
        ) : (
          <div>
            <a href="https://rentl.io/izjava-o-kolacicima">
              Pravila o korištenju kolačića
            </a>
          </div>
        )}
      </CookieConsent>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
