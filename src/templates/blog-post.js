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
          <div className="container">

          <article className="article-wrap">
            <div className="img-box">
              <img src="/naan.png" className="country-img"/>
            </div>

            <div className="list-txt">
              <div className="txt-desc">
                <h2>Chicken Biryani</h2>
                <ol>
                  <li>VEG</li>
                  <li>NON-VEG</li>
                </ol>
                <p>Ever heard of soul-satisfying food? Biryani tops the list. It is a delicious savory rice dish that is loaded with spicy marinated chicken/lamb and colorful saffron rice. Best accompanied with dahi chutney or mirchi ka salan. A slow-cooked, delectable chicken biryani full of aromatic flavours and masala layers, cooked in a Handi which is a round pot like vessel, with the neck narrower than the base, should be on every foodie's list. Slurrrrrp!!</p>
              </div>
              <div className="tags">
                <span>Can eat in <strong>Lunch, Dinner</strong></span>
              </div>
            </div>
          </article>

          <article className="article-wrap">
            <div className="img-box">
              <img src="/naan.png" className="country-img"/>
            </div>

            <div className="list-txt">
              <div className="txt-desc">
                <h2>Chicken Biryani</h2>
                <div className="food-type">
                <span className="veg"><img src="/food-icon.svg" /> VEG</span> <span className="n-veg"><img src="/food-icon.svg" /> NON-VEG</span>
                </div>
                <p>Ever heard of soul-satisfying food? Biryani tops the list. It is a delicious savory rice dish that is loaded with spicy marinated chicken/lamb and colorful saffron rice. Best accompanied with dahi chutney or mirchi ka salan. A slow-cooked, delectable chicken biryani full of aromatic flavours and masala layers, cooked in a Handi which is a round pot like vessel, with the neck narrower than the base, should be on every foodie's list. Slurrrrrp!!</p>
              </div>
              <div className="tags">
                <span>Can eat in <strong>Lunch, Dinner</strong></span>
              </div>
            </div>
          </article>

          <article className="article-wrap">
            <div className="img-box">
              <img src="/naan.png" className="country-img"/>
            </div>

            <div className="list-txt">
              <div className="txt-desc">
                <h2>Chicken Biryani</h2>
                <ol>
                  <li>VEG</li>
                  <li>NON-VEG</li>
                </ol>
                <p>Ever heard of soul-satisfying food? Biryani tops the list. It is a delicious savory rice dish that is loaded with spicy marinated chicken/lamb and colorful saffron rice. Best accompanied with dahi chutney or mirchi ka salan. A slow-cooked, delectable chicken biryani full of aromatic flavours and masala layers, cooked in a Handi which is a round pot like vessel, with the neck narrower than the base, should be on every foodie's list. Slurrrrrp!!</p>
              </div>
              <div className="tags">
                <span>Can eat in : <strong>Lunch ·  Dinner</strong></span>
              </div>
            </div>
          </article>



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
      excerpt(pruneLength: 160)
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
