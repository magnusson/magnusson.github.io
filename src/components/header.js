import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.header`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.2em;
  }
`

export default props => (
  <Wrapper>
    <Link to="/">
      <h1>{props.title}</h1>
    </Link>
  </Wrapper>
)
