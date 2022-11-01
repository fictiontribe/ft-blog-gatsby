import * as React from "react"
import { Link } from "gatsby"
import logoWhite from '../images/fictiontribe-logo-white.png';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      // <h1 className="main-heading">
        <Link to="/">{title}</Link>
      // </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <nav id="layout-nav" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Fiction Tribe Blog</a>
          </div>
        </nav>
        {isRootPath &&
          <header className="global-header pt-4">
            <div id="hero">
              <div id="masthead-image" className="homepage">
                <div id="headlines">
                  <h1>{header}</h1>
                  <h2>Find Your Story.</h2>
                </div>
              </div>
            </div>
          </header>
        }
        <main className="py-5">{children}</main>
        <footer id="footer">
          <div id="footer-content">
            <div id="bottom-logo" className="col-6 col-md-9 col-lg-10">
              <a href="http://www.fictiontribe.com/">
                <img src={logoWhite} class="logo" />
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 ms-auto col-6">
              <div id="contact-info">
                Fiction Tribe<br />
                350 SE Mill St.<br />
                Portland, OR 97214<br />
                <span class="appleLinksWhite">503.954.2268</span>
              </div>
              <div class="breclear"></div>
            </div>
          </div>
        </footer>
      </div >
    </div >
  )
}

export default Layout
