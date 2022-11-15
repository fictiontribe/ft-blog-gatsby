import * as React from "react"
import { Link } from "gatsby"
import logoWhite from '../images/fictiontribe-logo-white.png';
import logoBlack from '../images/FT-logo-min.png';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Layout = ({ location, title, children }) => {
  gsap.registerPlugin(ScrollTrigger);
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

  React.useEffect(() => {
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "body",
        start: "top -100px",
        end: "top -400px",
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
    });
  
    tl
    // .to(".logo-top-image", { top: "15px", left: "15px" }, "logo")
      .to(".header-logo", { scale: 0.65, ease: "Power2.out" }, "logo")
      .to(".header-logo", { background: "#a55490", ease: "Power2.out" }, "logo-color")
      
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top -1400px",
        end: "3000px",
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
    });
  
    tl2
    // .to(".logo-top-image", { top: "15px", left: "15px" }, "logo")
    .to(".header-logo", { background: "#357fb5" }, "color-change")
  }, [])


  return (
    <div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <a className="header-logo" href="http://blog.fictiontribe.com/">
          <img src={logoWhite} className="logo-top-image" />
        </a>
        {/* <nav id="layout-nav" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Fiction Tribe Blog</a>
          </div>
        </nav> */}
        {isRootPath &&
          <header className="global-header">
            <div id="hero">
              <div id="masthead-image" className="homepage">
                <div id="headlines">
                  <h1>{header}</h1>
                  <h2>Stories from Fiction Tribe</h2>
                </div>
              </div>
            </div>
          </header>
        }
        {isRootPath &&
          <main className="py-5">{children}</main>
        }
        {!isRootPath &&
          <main>{children}</main>
        }
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
