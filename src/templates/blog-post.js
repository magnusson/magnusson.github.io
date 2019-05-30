import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import LazyOwl from '../components/LazyOwl'
import styled from 'styled-components'

const Post = styled(LazyOwl)`
  font-size: 2.4rem;
  line-height: 3rem;

  a {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  figcaption {
    font-size: 1.2em;
    margin-top: 0.2em;
  }

  blockquote {
    border-left: 5px solid #68b8ee;
    padding: 1em 1em;
  }

  ul {
    margin-left: 1em;

    li {
      margin-top: 0;
    }
  }

  pre {
    background-color: #f5f5f5;
    font-size: 1.4rem;
    line-height: 1;
    font-family: 'Consolas', 'Inconsolata', Courier, monospace;
    border-radius: 4px;
    overflow-x: auto;
    padding: 1rem;
  }

  pre code {
    color: #1a1a1a;
  }

  code {
    background-color: #f5f5f5;
    color: #1a1a1a;
    font-size: 1.4rem;
    font-family: 'Consolas', 'Inconsolata', Courier, monospace;
  }
`

const PostTitle = styled.h1`
  font-size: 4.5rem;
  line-height: 5.4rem;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <Post>
        <PostTitle>{post.frontmatter.title}</PostTitle>
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
