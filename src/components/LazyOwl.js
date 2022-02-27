import React from 'react'
import styled from 'styled-components'

const LazyOwlStyle = styled.div`
  & * + * {
    margin-top: 3rem;
  }
`

const LazyOwl = ({ className, children }) => (
  <LazyOwlStyle className={className}>{children}</LazyOwlStyle>
)

export default LazyOwl
