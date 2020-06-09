/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/rhea-profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        // display: `flex`,
        marginBottom: rhythm(1.5),
        flexWrap: `wrap`,
      }}
    >
      <div
      style={{
        
      }}
      >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          display: `block`,
          marginLeft: `auto`,
          marginRight: `auto`,
          marginBottom: `0`,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      </div>
      
      <p>
        <h3>About Me</h3>
        <p>{author.summary}</p>
        <p>{author.summary}</p>
        <a href={`https://linkedin.com/in/${social.linkedin}`}>
          Connect with me on LinkedIn
        </a>
      </p>
    </div>
  )
}

export default Bio
