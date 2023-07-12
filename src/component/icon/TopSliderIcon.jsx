


import styled from '@emotion/styled'
import React from 'react'
import { BoxCol } from '../avatar/UserAvatar'
import { PrimaryText } from '../fonts/PrimaryFonts'
import { SecondaryText } from '../fonts/SecondaryFonst'


export const SliderIcon = styled(BoxCol)(props => ({
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  gap: 5,  
  backgroundColor: 'rgba(77,78,83,.45)',
  borderRadius: 20,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'rgba(77,78,83,.55)'
  }
}))

const Icon = styled.div({

})


export const TopSliderIcon = ({svg,text}) => {
  return (
    <SliderIcon >
      <Icon>
          {svg}
      </Icon>
      {text ? <PrimaryText text={text} /> : <PrimaryText text={ 'خرید اشتراک'} />}
     
    </SliderIcon>
  )
}
