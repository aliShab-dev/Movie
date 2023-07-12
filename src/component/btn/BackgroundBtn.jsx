import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { PrimaryText } from '../fonts/PrimaryFonts'
import { BoxRow } from '../Navbar/Navbar'

const SliderBtn = styled(BoxRow)( props => ({
  position: 'relative',
  borderRadius: '26px',
  backgroundColor: '#202735',
  width: 180,
  height: 50,
}))
const PlayBtn = styled(BoxRow)({
  borderRadius: '50%',
  backgroundColor: '#fff',
  width: 38,
  height: 40,
  position: 'absolute',
  right: 7,
  paddingRight: 5,
  cursor: 'pointer'
})

const BtnText = styled.div({
  backgroundColor: 'transparent',
  color: '#fff',
  marginRight: 40,
})


export const BackgroundBtn = () => {
  return (
    <SliderBtn>

    <BtnText>
      <PrimaryText text={' مشاهده سریال ها ..'} weight={600}  size={18}/>
    </BtnText>

    <PlayBtn>
      <Image alt='sharp' src='/shape.png' width={14} height={13} />
    </PlayBtn>
  </SliderBtn>
  )
}
