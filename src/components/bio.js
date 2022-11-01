/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react"

import { StaticImage, GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

import instagram from '../images/instagram_black.svg';
import linkedin from '../images/linkedin_black.svg';
import vimeo from '../images/vimeo_black.svg';
const Bio = (props) => {

  const [post, setPost] = React.useState(props.post);
  const [imageData, setImageData] = React.useState(post?.frontmatter?.author?.image?.src?.childImageSharp.fluid);

  useEffect(() => {
    setPost(props.post);
    console.log(post)
    setImageData(post?.frontmatter?.author?.image?.src?.childImageSharp.fluid)
    console.log(imageData)
  }, [post])

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data?.site?.siteMetadata?.author
  const social = data?.site?.siteMetadata?.social
  {/* <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )}
    </div> */}
  return (
    <div id="attributation-bar">
      {imageData &&
        <div id="author-avatar">
          {/* <GatsbyImage
            className="bio-avatar rounded-circle"
            layout="relative"
            formats={["auto", "webp", "avif"]}
            image={imageData}
            width={50}
            height={50}
            quality={95}
            alt={post?.frontmatter?.author?.name ? post?.frontmatter?.author?.name : "Fiction Tribe"}
          /> */}
          <StaticImage
            className="bio-avatar rounded-circle"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/avatar-tobias.png"
            width={50}
            height={50}
            quality={95}
            alt="Tobias sugar"
          />
        </div>
      }
      <div id="author-info">
        <span class="author-name">{post?.frontmatter?.author?.name ? post?.frontmatter?.author?.name : "Fiction Tribe"}</span>
        {post?.frontmatter?.author?.role && <>
          <br />
          <span class="author-title">{post.frontmatter.author.role}</span>
        </>
        }
        <br />
        <span class="time-stamp">{post?.frontmatter?.date}</span>
      </div>
      <div id="social-links">
        <a href="https://www.linkedin.com/company/fictiontribe" className="mx-2" target="_blank"><img
          src={linkedin} border="0" width="30" height="30"
          alt="LinkedIN" /></a>
        <a href="https://instagram.com/fictiontribe/" target="_blank" className="mx-2"><img
          src={instagram} border="0" width="30" height="30"
          alt="Instagram" /></a>
        <a href="https://vimeo.com/fictiontribe" className="mx-2" target="_blank"><img
          src={vimeo} border="0" width="30" height="30"
          alt="Vimeo" /></a>

      </div>
      <div class="brclear"></div>
    </div>

  )
}

export default Bio
