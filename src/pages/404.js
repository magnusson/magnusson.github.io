import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/PostList'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 3rem;
  padding: 1rem;
`

const Content = styled.p`
  font-size: 2rem;
  line-height: 2.4rem;
  padding: 1rem;
`

export default () => (
  <Layout>
    <Title>
      Not found{' '}
      <span role="img" aria-label="Fearful">
        😨
      </span>
    </Title>
    <Content>
      This should not happen, go read one of the working posts instead.{' '}
      <span role="img" aria-label="Backhand Index Pointing Down">
        👇
      </span>
    </Content>
    <PostList />
  </Layout>
)
