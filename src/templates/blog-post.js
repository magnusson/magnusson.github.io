import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import LazyOwl from '../components/LazyOwl'
import styled from 'styled-components'

const Post = styled(LazyOwl)`
  a {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  figcaption {
    font-size: 0.8em;
    margin-top: 0.2em;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <Post>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
