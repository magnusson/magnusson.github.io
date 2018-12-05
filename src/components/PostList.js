import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PostListItem from '../components/PostListItem'
import styled from 'styled-components'

const Wrapper = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostListItem key={node.id} post={node} />
        ))}
      </Wrapper>
    )}
  />
)
