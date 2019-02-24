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
      color: #0e639c;
    }

    time {
      color: #0e639c;
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
  padding: 1rem 0;
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
    background-color: #68217a;
    border-radius: 0.4rem;
    padding: 1rem;
  }
`

export default props => (
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
        <p>{props.post.frontmatter.tag}</p>
      </PostTag>
    </PostInfo>
  </Post>
)
