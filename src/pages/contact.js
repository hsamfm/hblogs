import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>



      <form action="/contact/new">
          <input type="text" style={{}} placeholder="Email"/>
      </form>
    </Layout>
)



export default ContactPage