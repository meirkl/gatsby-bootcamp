import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        The best way to reach me as via{" "}
        <a
          href="https://twitter.com/meir_keller"
          target="_blank"
          rel="noopener noreferrer"
        >
          @meir_keller
        </a>{" "}
        on Twitter!
      </p>
    </Layout>
  )
}

export default ContactPage
