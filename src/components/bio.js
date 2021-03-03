import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
          }
          social {
            linkedin
            twitter
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
    <div>
      {i}
      <div className="connect">
          <a target="_blank" href={`${social.linkedin}`}>
            linkedin  
          </a> 
          <a target="_blank" href={`${social.twitter}`}>
            twitter
          </a>
          <a target="_blank" href={`mailto:rhea49rdgs@gmail.com`}>
            email
          </a>
          <a target="_blank" href="https://github.com/missrhea">
            github
          </a>
      </div>

      <h2>Hi!</h2>
      <p>a bio</p>
      
    </div>
  )
}

export default Bio
