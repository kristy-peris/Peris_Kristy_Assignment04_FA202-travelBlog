import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Blog from "../pages/blog"
import headerStyles from "../components/header.module.css"

const Header = ({ siteTitle, siteDescription, blog}) => (
  <header
    style={{
      background: `lightSeaGreen`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: "0 0 0 0.9rem" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <h3 style={{color: `rgba(223,227,235,0.4)`, margin: `0 0 0 0.9rem`}}>{siteDescription}</h3>
        <div style={{margin: `0 auto`, maxwidth: 960, padding: `1.45rem 1.08rem`, display: `flex`}}>
          <h4 style={{marginRight: `o.9rem`}}>
            <Link to="/blog" className={headerStyles.link}>{blog}</Link>
          </h4>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  blog: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
