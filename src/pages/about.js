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
        <SEO title="about" />
        <section className="about_section">
          <div className="container">
            <div className="about_box">
            <Link to={`/`} className="brand">
              <img src="/logo.svg" className="logo" />
            </Link>
            <div className="desc">
              <h1>About</h1>
                <p>Our individual foodie journeys so far led us to join hands and create something for the community. We have literally handpicked these 10 countries and now present to you the most popular dishes you must try when you're visiting any of these.</p>
                <h3>Happy Eating</h3>
            </div>
            <div className="maker-credit">
                <h1>Made with love by</h1>
                <div className="maker-list">
                  <div className="maker-wrap">
                    <div className="maker">
                    <div className="image">
                      <img src="/vijay-verma.png"/>
                    </div>
                    <div className="txt">
                      <h3><a href="https://twitter.com/realvjy" target="__blank">vijay verma</a></h3>
                      <p>“Taste your way around the world”</p>
                    </div>
                    </div>
                  </div>
                  <div className="maker-wrap">
                    <div className="maker">
                    <div className="image">
                      <img src="/aakarshna.png"/>
                    </div>
                    <div className="txt">
                      <h3><a href="https://twitter.com/_aakarshna" target="__blank">Aakarshna</a></h3>
                      <p>“Life is short, eat!”</p>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="maker-credit">
              <h1>You can help us to curate as well? <a href="#">here</a></h1>
            </div>
            </div>
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
