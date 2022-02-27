import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = styled.li`
  display: flex;
  border-bottom: 1px dotted #252526;
  padding: 2rem 1rem;

  &:hover {
    background-color: #252526;

    h2 {
      color: #68b8ee;
    }

    time {
      color: #68b8ee;
    }
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const PostLink = styled(Link)`
  flex-grow: 1;
`

const PostTitle = styled.h2`
  font-size: 3rem;
  padding: 0 0 1rem;
`

const PostDesc = styled.p`
  font-size: 2.4rem;
  line-height: 3rem;
`

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  text-align: right;

  @media only screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding-top: 1rem;
  }
`

const PostTime = styled.time`
  width: 100px;
  font-size: 1.8rem;
  padding-bottom: 1rem;

  @media only screen and (max-width: 767px) {
    padding: 0;
  }
`

const PostTag = styled.div`
  font-size: 1.4rem;

  p {
    display: inline-block;
    border-radius: 0.4rem;
    padding: 1rem;
  }
`

const tagColors = {
  Code: { background: '#222222', color: '#fafbfc' },
  Blog: { background: '#f57d00', color: '#1a1a1a' },
  Games: { background: '#6441a4', color: '#fafbfc' },
  Movies: { background: '#f5c518', color: '#1a1a1a' },
}

const PostListItem = props => (
  <Post>
    <PostLink to={props.post.fields.slug}>
      <PostTitle>{props.post.frontmatter.title}</PostTitle>
      <PostDesc>{props.post.excerpt}</PostDesc>
    </PostLink>
    <PostInfo>
      <PostTime datetime={props.post.frontmatter.date}>
        {props.post.frontmatter.date}
      </PostTime>
      <PostTag>
        <p
          style={{
            backgroundColor: tagColors[props.post.frontmatter.tag].background,
            color: tagColors[props.post.frontmatter.tag].color,
          }}
        >
          {props.post.frontmatter.tag}
        </p>
      </PostTag>
    </PostInfo>
  </Post>
)

export default PostListItem
