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

      <p className="bio">
Hi there! My name’s Rhea. I have over two years of experience designing, building, and deploying machine learning systems at scale. I have a background in engineering and business, and I’m based in Vancouver, Canada.
<br></br>
Currently, I’m a Data Scientist on the Global Cyber Security team at RBC where I ship Machine Learning and Deep Learning solutions to minimize the risk of insider threats and data exposure.
<br></br>
Previously, I was on the Data and Analytics team at RBC where I developed Machine Learning models to improve the client experience with product recommendations and increased client acquisition and engagement, for 12M+ clients in collaboration with Retail Banking and Wealth Management.
<br></br>
I value collaboration as much as I value ownership and working independently. I'm always curious and that fuels my love for learning. I want to work on meaningful problems, especially challenging ones that help me grow. I'm an optimist. A better product, a better team, a better life, or a better world is always inspiring to me.
<br></br>
Listening to podcasts on a walk, reading, hiking, and teaching are some things I enjoy doing in my free time. Feel free to reach out to me via email or hit me up on Twitter/LinkedIn.
      </p>
    </div>
  )
}

export default Bio
