import styled from "@emotion/styled";

const StyledPrimaryText = styled.p(props => ({
  fontSize: props.size || 18,
  fontWeight: props.weight || 500,
  lineHeight: '22px',
  color:  '#fff',
  cursor: 'default',
  fontFamily: 'sans-serif',
  direction: props.direction
}))

import React from 'react'

export const PrimaryText = ({text, color, size, weight, direction}) => {
  return (
    <StyledPrimaryText color={color} size={size} weight={weight} direction={direction}>
      {text}
    </StyledPrimaryText>
  )
}