import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
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
          author{
            name
          }
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
        {/* <li>
          <Link to={`/`} >Writing</Link>
        </li>
        <li>
        <Link to={`/my-second-post`} >Reading</Link>
        </li> */}
        <li>
        <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) {
          return null
        }
        return(
      
        <label class="switch dark-switcher">
          <input
            id="dark-mode-toggler"
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
          {/* {theme.dark ? <span>☀</span> : <span>☾</span>} */}
          <span class="slider round"></span>
        </label>
      )}}
    </ThemeToggler>
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
        maxWidth: rhythm(25),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        transition: 'color 0.4s ease-out, background 0.6s ease-out'
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      
      <footer className={styles.footer}>
        © {new Date().getFullYear()} {data.site.siteMetadata.author.name} 
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout