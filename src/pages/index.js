import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <nav className="container">
          <header className="hero-nav">
            <p>Are you travling somewhere. You should check these list and must</p>
            <Link to={`/`} className="brand">
              <img src="/logo.svg" className="logo" />
            </Link>
          </header>
        </nav>
        <section className="country_section">
          <div className="container">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article key={node.fields.slug} className="country-wrap">
                  <a href="/" className="country-box">
                  <img src={node.frontmatter.image.childImageSharp.fluid.src} className="country-img"/>
                    <header className="country-txt">
                      <div className="txt-wrap">
                        <h4>try this food in</h4>
                        <h2>{title}</h2>
                        <h6 className="food-count">14 foods</h6>
                      </div>
                    </header>
                  </a>
                </article>
              )
            })}
          </div>
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
          excerpt
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
