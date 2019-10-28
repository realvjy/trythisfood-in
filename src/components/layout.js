import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          {new Date().getFullYear()}, Makers
          {` `} vijay verma & aakarshana
        </footer>
      </div>
    )
  }
}

export default Layout
