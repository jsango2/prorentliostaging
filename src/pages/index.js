import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"
import Testimonial from "../components/testimonial/testimonial"
import FourFacts from "../components/fourFacts/fourFacts"
import Support from "../components/support/support"
import { graphql } from "gatsby"
import TableSection from "../components/Table/TableSection"
import Clients from "../components/Clients"
import UserLogos from "../components/UserLogos"
import Integrations from "../components/Integrations"
import FormBottom from "../components/FormBottom"
import BlogCards from "../components/BlogCards"
import Footer from "../components/Footer"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Rentlio Hoteli" />
      <Hero />
      <Testimonial />
      <FourFacts />
      <TableSection />
      <Clients />
      <UserLogos />
      <Integrations />
      <FormBottom />
      <BlogCards />
      <Footer />
      {/* <Support /> */}
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
