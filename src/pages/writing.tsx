import React from 'react'
import { PageProps, Link, graphql } from "gatsby"

import WritingList from "../components/writinglist"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      edges: {
        node: {
          excerpt: string
          frontmatter: {
            title: string
            date: string
            description: string
          }
          fields: {
            slug: string
          }
        }
      }[]
    }
  }

const DisplayWritingList = ({ data, location }: PageProps<Data>) => {

  const siteTitle = data.site.siteMetadata.title

    return (
    <Layout location={location} title={siteTitle}>
      <SEO title="DisplayWritingList" />
      <div>
      <WritingList/>
      </div>
    </Layout>
    )
}

export default DisplayWritingList

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`