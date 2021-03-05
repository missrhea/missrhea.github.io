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

      <h3>Hi there!</h3>
      <p className="bio">

My name is Rhea. In December 2020 I graduated with a Master's degree in <a href="https://www.sfu.ca/big-data/big-data-sfu">Computer Science and specialization in Big Data</a> from <a href="https://www.sfu.ca/">SFU</a>. Before that, I was pursuing my Bachelor's degree in Computer Engineering.  I'm a data scientist and software engineer. Python and SQL are my bread and butter. Last summer I was the data scientist on my team for <a href="https://jobs.rbc.com/ca/en/amplify">RBC Amplify</a>, a high intensity innovation program. 
<br></br>
I LOVE data of all sorts, big or small! My area of expertise is building robust machine learning and statistical methods to solve real-world challenges. I have experience working with cloud computing services to scale and deploy models.  Besides this, data viz fascinates me, and I sometimes tinker around with <a href="https://d3js.org">D3.js</a> for fun. 
<br></br>
I enjoy collaborating on teams as much as I value ownership and working independently. I'm always curious and that fuels my love for learning. I have a desire to work on complex, tough, meaningful problems. I'm an optimist. A better product, a better team, a better life, or a better world is always inspiring to me. 
<br></br>
      </p>
      <h3>👋🏻 Say hi</h3>
Feel free to reach out to on email or DM me on twitter/linkedin.

    </div>
  )
}

export default Bio
