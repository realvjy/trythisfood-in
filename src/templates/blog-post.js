import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const c_list = this.props.data.allMarkdownRemark.edges
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

            <div className="country-links">
                <button className="d_button">
                    {post.frontmatter.title} <span className="d-arrow"><img src="/down-arrow.svg"/></span>
                </button>
                <ul className="d-list">
                  {c_list.map(({ node }) => {
                    return(
                      <li key={node.fields.slug}><a href={node.fields.slug}>{node.frontmatter.title}</a></li>
                    )
                  })}
                </ul>
              </div>
          </div>
          <div className="tweet">
            <a href="https://twitter.com/intent/tweet?url=trythisfood.co&text=Love%20travelling%20https%3A%2F%2Ftrythisfood.in%20by%20%40realvjy%20%40_aakarshna">Share on twitter <img src="/twitter.svg"/></a>
          </div>
        </nav>
        <section className="list_hero">
          <div className="container">
          <div className="list_country_wrap">
            <div className="list_country_img">
              <img src={post.frontmatter.cover_image.childImageSharp.fluid.src} className="country-img"/>
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
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
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
        cover_image{
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
