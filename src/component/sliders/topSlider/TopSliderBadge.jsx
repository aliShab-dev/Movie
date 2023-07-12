import styled from '@emotion/styled'
import React from 'react'
import { PrimaryText } from '../../fonts/PrimaryFonts'
import { SliderIcon } from '../../icon/TopSliderIcon'

const SliderBadge = styled(SliderIcon)({
  width: 50,
  height: 10,
  backgroundColor:'rgba(255, 255, 255, .15)',  
  color: '#fff',
  cursor: 'pointer',
})


export const TopSliderBadge = ({text}) => {
  return (
    <SliderBadge>
      <PrimaryText text={text} />
    </SliderBadge>
  )
}
