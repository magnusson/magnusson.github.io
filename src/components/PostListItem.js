import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = styled.li`
  border-top: 1px solid #fafbfc;
  padding: 1.5em 0;
  margin-top: 0;
`

const PostLink = styled(Link)`
  display: block;

  &:hover {
    h2 {
      color: #3f88c5;
    }
  }
`

const PostTitle = styled.h2`
  margin-bottom: 0.25rem;
`

export default props => (
  <Post>
    <PostLink to={props.post.fields.slug}>
      <PostTitle>{props.post.frontmatter.title}</PostTitle>
      <p>{props.post.excerpt}</p>
    </PostLink>
  </Post>
)
