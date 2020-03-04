import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

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
        <section className="country_section">
          <div className="container">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article key={node.fields.slug} className="country-wrap">
                  <a href={node.fields.slug} className="country-box">
                  <img src={node.frontmatter.image.childImageSharp.fluid.src} className="country-img"/>
                    <header className="country-txt">
                      <div className="txt-wrap">
                        <h4>try this food in</h4>
                        <h2>{title}</h2>
                        <h6 className="food-count">View list</h6>
                      </div>
                    </header>
                  </a>
                </article>
              )
            })}
          </div>
        </section>
        <Footer/>
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
