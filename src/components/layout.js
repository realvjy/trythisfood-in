import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      <div className="announce-wrapper ph">
        <div className="container">
          <div className="an-details">

          </div>
        </div>
      </div>
      </>
    )
    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer className="container">
          <div className="about">
            <div className="logo"><a href="">  <img src="/logo.svg" className="logo" /></a></div>
            <div className="menu">
              <a href="">About</a> • <a href="">Help us</a>
            </div>
          </div>
          <div className="credit">
            <div className="maker">Makers</div> <div className="make-list"><a href="https://twitter.com/realvjy">vijay verma</a> & <a href="https://twitter.com/_aakarshna">Aakarshna</a></div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
