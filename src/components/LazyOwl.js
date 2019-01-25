import React from 'react'
import styled from 'styled-components'

const LazyOwl = styled.div`
  & * + * {
    margin-top: 3rem;
  }
`

export default ({ className, children }) => (
  <LazyOwl className={className}>{children}</LazyOwl>
)
