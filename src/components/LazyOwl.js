import React from 'react'
import styled from 'styled-components'

const LazyOwl = styled.div`
  & * + * {
    margin-top: 1.2em;
  }
`

export default ({ className, children }) => (
  <LazyOwl className={className}>{children}</LazyOwl>
)
