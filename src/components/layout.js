import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '../../content/assets/favicon.png'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: #1a1a1a;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Oxygen", sans-serif;
    color: #fafbfc;
  }

  a {
    color: #fafbfc;
    text-decoration: none;
  }

  iframe {
    border: none;
  }
`

const Main = styled.main`
  max-width: 825px;
  margin: 4em auto;
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'A simple personal place on the web, I sometimes write about coding, games and entertainment',
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <html lang="en" />
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "ef066a3c5dc14cc2819c6d9e7f00477d", "spa": true}'
          ></script>
        </Helmet>
        <Main>{children}</Main>
        <GlobalStyle />
      </>
    )}
  />
)
