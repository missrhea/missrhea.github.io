/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar1: file(absolutePath: { regex: "/side profile.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      avatar2: file(absolutePath: { regex: "/side profile dark.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
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

  let imgSrcLight = data.avatar1.childImageSharp.fluid
  let imgSrcDark = data.avatar2.childImageSharp.fluid
  

  
  let i = (<Image
    fluid={imgSrcLight}
    alt={author.name}
    fadeIn={false}
    // Style affects the wrapper element of Image
    style={{
      display: `block`,
      marginLeft: `auto`,
      marginRight: `auto`,
      marginBottom: `0`,
      borderRadius: `100%`,
    }}
    // imgStyle affects the img element only
    imgStyle={{
      borderRadius: `50%`,
      }}
    />)
    



  return (
    <div
      style={{
        // display: `flex`,
        marginBottom: rhythm(1.5),
        flexWrap: `wrap`,
      }}>
      <div>
      {i}
      </div>
      <div>
        <h3>{author.name}, Data Scientist at RBC</h3>
        
        <p>{author.summary}</p>
        <a href={`https://linkedin.com/in/${social.linkedin}`}>
          Connect with me on LinkedIn.
        </a>
      </div>
    </div>
  )
}

export default Bio
