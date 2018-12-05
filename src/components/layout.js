import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '../images/favicon.png'
import Header from '../components/Header'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: #1a1a1a;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    width: 95%;
    max-width: 670px;
    font-family: "Rubik", sans-serif;
    color: #fafbfc;
    margin: 0 auto 4em;
  }

  a {
    color: #fafbfc;
    text-decoration: none;
  }
`

const Main = styled.main`
  margin-bottom: 0.25rem;
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
              content: 'A simple personal place on the web',
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header title={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <GlobalStyle />
      </>
    )}
  />
)
