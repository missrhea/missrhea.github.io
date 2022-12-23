/**
 * WritingList component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from './list.module.css'

const WritingList = () => {

    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
                          filter: {fileAbsolutePath: {regex: "/content/writing/"}}) {
          edges {
            node {
              excerpt
              timeToRead
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD/MM/YYYY")
                title
                description
              }
            }
          }
        }
      }
    `)

    const posts = data.allMarkdownRemark.edges
      return (
        posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className={styles.writinglist}>
                <a>
                    <Link to={node.fields.slug}>
                    {title}
                    </Link>
                </a>
                <time>{node.frontmatter.date}</time>
                {/* <p> */}
                    {/* {node.frontmatter.description} */}
                    {/* <p className={styles.timeToRead}> {node.timeToRead} min read </p> */}
                {/* </p> */}
            </div>
          )
        })
      )
  }
  
  export default WritingList

