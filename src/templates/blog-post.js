import * as React from "react"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../components/video"

import { css } from "@emotion/react"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const featuredimage = post.frontmatter.featuredimage
  const imageData = post.frontmatter.featuredimage.src.childImageSharp.fluid
  const videoURL = post.frontmatter?.video?.URL
  const ogImagePath = post.frontmatter?.ogimage?.src.childImageSharp.fixed.src
  const [postData, setPostData] = useState(post);

  useEffect(() => {
    setPostData(post);
  }, [post])

  return (
    <Layout location={location} title={siteTitle}>
      <header className="">
        <BackgroundImage
          id="masthead-image"
          Tag="section"
          fluid={imageData}
        >
          <div id="headlines">
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
          </div>
        </BackgroundImage>
      </header>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="container">
          <Bio post={postData} />

          <div className="row">
            <div className="col-md-3 about-ft">
              <h4>About Fiction Tribe</h4>
              <p>We’re Fiction Tribe, an independent digital creative team
                that rethinks disruptive technology for brands to
                vigorously connect people and ideas.
                Our technology chops, design rigor and industry acumen
                combine with a shit-ton of hustle to make great work that works.</p>
              <a className="gilroy-link" target="_blank" href="https://fictiontribe.com">Visit our website</a>
            </div>
            <div className="col-md-8">
              {videoURL && (
                <Video
                  videoSrcURL={videoURL}
                  videoTitle={post.frontmatter?.video?.title}
                />
              )}
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody" className="px-sm-5"
              />
              <hr />
              <footer>

              </footer>
            </div>
            <div id="next-prev" className="row">

              <nav className="blog-post-nav">
                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li className="prev-post col-sm-6">
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        <span className="small-title"><i className="fa fa-arrow-left" aria-hidden="true"></i>Previous</span>
                        <p className="link-next-prev">← {previous.frontmatter.title}</p>
                      </Link>
                    )}
                  </li>
                  <li className="next-post col-sm-6 text-end">

                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        <span className="small-title">Next <i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                        <p className="link-next-prev"> {next.frontmatter.title} →</p>
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      image={post.frontmatter?.ogimage?.src.childImageSharp.fixed.src}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        author {
          name
          role
          email
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(
                  width: 50
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredimage {
          src {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        ogimage { 
          src {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
