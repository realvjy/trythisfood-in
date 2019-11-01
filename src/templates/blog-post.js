import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <nav className="list-nav container">
          <div className="brand-nav">
            <Link to={`/`} className="brand">
              <img src="/logo.svg" className="logo" />
            </Link>
            <div className="dropdown">
              <h4>{post.frontmatter.title} <img src="/down-arrow.svg" /></h4>
            </div>
          </div>
          <div className="tweet">
            tweet this
          </div>
        </nav>
        <section className="list_hero">
          <div className="container">
          <div className="list_country_wrap">
            <div className="list_country_img">
              <img src={post.frontmatter.image.childImageSharp.fluid.src} className="country-img"/>
            </div>
            <div className="list_country_txt">
              <div className="summary_txt">
                <h1>
                  {post.frontmatter.title}
                </h1>
                <p>
                  {post.frontmatter.description}
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section className="list_section">
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className="container">
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(format: HTML)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
