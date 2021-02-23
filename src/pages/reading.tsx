import React from 'react'
import { PageProps, Link, graphql } from "gatsby"

import ReadingList from "../components/readinglist"
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
            author: string
            rating: string
          }
          fields: {
            slug: string
          }
        }
      }[]
    }
  }

const Reading = ({ data, location }: PageProps<Data>) => {

  const siteTitle = data.site.siteMetadata.title

    return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Reading" />
      <div>
      <ReadingList/>
      </div>
    </Layout>
    )
}

export default Reading

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`