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

const Writing = ({ data, location }: PageProps<Data>) => {

  const siteTitle = data.site.siteMetadata.title

    return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Writing" />
      <div>
      <h1>Writing</h1>
      <hr></hr>
      <WritingList/>
      </div>
    </Layout>
    )
}

export default Writing

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`