import styled from "@emotion/styled";

const StyledSecondaryText = styled.p(props => ({
  fontSize: props.size || 16,
  fontWeight: props.weight || 400,
  lineHeight: '18px',
  color: props.color || '#fff',
  opacity: '0.75',
  cursor: 'default',
  direction: props.direction,
}))

import React from 'react'

export const SecondaryText = ({text, color, size, direction, weight}) => {
  return (
    <StyledSecondaryText weight={weight} color={color} size={size} direction={direction}>
      {text}
    </StyledSecondaryText>
  )
}
