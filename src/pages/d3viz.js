import React from "react"
import { graphql } from "gatsby"
import * as D3 from "d3"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getRandomData = () => D3.range(20).map(() => ({x:Math.random(), y:Math.random()}))

export default ({ data, location }) => {
    const d3data = getRandomData();
    const xScale = D3.scaleLinear().domain([0,1]).range([0,500]);
    const yScale = D3.scaleLinear().domain([0,1]).range([0,500]);
    const siteTitle = data.site.siteMetadata.title;
    return(
        <div>
        <Layout ocation={location} title={siteTitle}>
        <SEO title="Some kind of trial figuring out how to use D3.js in gatsby." />
        <svg width={500} height={500}>
            {d3data.map(d=>(
                <circle cx={xScale(d.x)} cy={yScale(d.y)} r={5} fill={'#EB4888'} stroke={'gray'}/>
            ))}
        </svg>
        </Layout>
        </div>
    )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
