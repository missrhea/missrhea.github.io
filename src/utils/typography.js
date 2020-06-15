import Typography from "typography"
import GithubTheme from "typography-theme-github"

GithubTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}
GithubTheme.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)',
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
  },
})

// delete GithubTheme.googleFonts
GithubTheme.baseFontSize = '16px'
GithubTheme.lineHeight = '90px';
GithubTheme.baseLineHeight = 1.9
GithubTheme.googleFonts = [
  {
    name: 'Inter',
    styles: [
      '400',
      '400i',
      '700',
      '700i',
    ],
  },
]
GithubTheme.headerFontFamily= ['Inter' , 'sans-serif']
GithubTheme.bodyFontFamily= ['Inter' , 'sans-serif']


const typography = new Typography(GithubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
