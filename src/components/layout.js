import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import styles from './layout.module.css'
import "typeface-inter"
require('typeface-inter')
const Layout = ({ location, title, children }) => {

  const data = useStaticQuery(graphql`
    query layoutQuery{
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let header = (
    <div>
      
      <nav
       style={{
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
      }}
      >
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          to={`/`}
        >
          {title}
        </Link>
      </h3>
      <ul className={styles.list}
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        listStyle: `none`,
        padding: 0,
      }}
      >
        <li>
          <Link to={`/`} >Writing</Link>
        </li>
        <li>
        <Link to={`/my-second-post`} >Reading</Link>
        </li>
      </ul>
    </nav>
    </div>
    )

  return (
    <div className={styles.layoutDiv}
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <hr></hr>
      <main>{children}</main>
      
      <footer className={styles.footer}>
        © {new Date().getFullYear()} {data.site.siteMetadata.title} 
      </footer>
    </div>
  )
}

export default Layout