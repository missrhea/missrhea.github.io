import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { rhythm, scale } from "../utils/typography"
// import Img from "gatsby-image"

export default function Template({ data, location }){
  const { markdownRemark : post} = data // data.markdownRemark holds your post data
  // const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return(
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Helmet title={ `${post.frontmatter.title}`}  defer={false} />        
        <h1 style={{
              marginBottom: rhythm(0),
              marginTop: rhythm(1) ,
            }}
        >{post.frontmatter.title}</h1>
        <p style={{
              ...scale(-1 / 5),
              marginBottom: rhythm(0),
              marginTop: rhythm(0),
            }}
        >{post.frontmatter.date}</p>
        <p style={{
              ...scale(-1 / 5),
              marginBottom: rhythm(1),
            }}
        >{post.frontmatter.rating}</p>

        {/* <Img style={{
              marginBottom: rhythm(1),
            }}
            fluid={featuredImgFluid} /> */}
        
        <div className="blog-post-content"
             dangerouslySetInnerHTML={{__html: post.html}}
        />
    </Layout>
  )
}


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        rating
        date(formatString: "MMMM DD, YYYY")
        description
        
      }
    }
  }
`
/*featuredImage{
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }*/