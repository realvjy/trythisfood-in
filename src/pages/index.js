import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import Footer from "../components/footer"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Must try these food when traveling" />
        <nav className="container">
          <header className="hero-nav">
            <p>Will you travel for food?</p>
            <Link to={`/`} className="brand">
              <img src="/logo.svg" className="logo" />
            </Link>
          </header>
        </nav>
        <section className="country_section container soon">
          <h1>Coming Soon </h1>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt(format: HTML)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image{
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
