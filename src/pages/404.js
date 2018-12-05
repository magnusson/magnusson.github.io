import React from 'react'
import Layout from '../components/layout'
import LazyOwl from '../components/LazyOwl'
import PostList from '../components/PostList'

export default () => (
  <Layout>
    <LazyOwl>
      <h2>
        Not found{' '}
        <span role="img" aria-label="Fearful">
          😨
        </span>
      </h2>
      <p>
        This should not happen, go read one of my posts instead.{' '}
        <span role="img" aria-label="Backhand Index Pointing Down">
          👇
        </span>
      </p>
      <PostList />
    </LazyOwl>
  </Layout>
)
