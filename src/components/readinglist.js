/**
 * WritingList component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from './list.module.css'

const ReadingList = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
            filter: {fileAbsolutePath: {regex: "/content/reading/"}}) {
          edges {
            node {
              excerpt
              fields {
                slug
              } 
              frontmatter {
                date(formatString:"DD/MM/YYYY")
                author
                rating
                title
              }
            }
          }
        }
      }
    `)

    const posts = data.allMarkdownRemark.edges

    return (
      posts.map(({ node }) => {
        const title = node.frontmatter.title
        return (
          <div key={node.fields.slug} className={styles.readinglist}>
              <a>
                  <Link to={node.fields.slug}>
                  {title}
                  </Link>
              </a>
              <p>{node.frontmatter.author}</p>
              <time>{node.frontmatter.date}</time>
              <p>{node.frontmatter.rating}</p>
          </div>
        )
      })
    )
  }
  
  export default ReadingList