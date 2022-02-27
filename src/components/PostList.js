import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PostListItem from '../components/PostListItem'
import styled from 'styled-components'

const Wrapper = styled.ol`
  list-style: none;
  padding: 0;
`

const PostList = () => (
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
                date
                tag
              }
              fields {
                slug
              }
              excerpt(pruneLength: 64)
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

export default PostList
