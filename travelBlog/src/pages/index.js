import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my Adventure! Feel free to explore!</h1>
    <h2>My name is Kristy and this is where I log my adventures</h2>
    <p>Need a Travel Advisor or Itineraries? <Link to="../blog">Click Here!</Link></p>
  </Layout>
)

export default IndexPage
