import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
    return (
        <Layout>
            <SEO title="Blog" />
            <h1> The Blog</h1>
            <p>Lets get inspired</p>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}

export default Blog