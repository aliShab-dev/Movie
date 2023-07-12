import { PrimaryText } from '@/component/fonts/PrimaryFonts'
import { BoxRow } from '@/component/Navbar/Navbar'
import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'




const SliderBtn = styled(BoxRow)( props => ({
  position: 'relative',
  borderRadius: '26px',
  backgroundColor: '#EA9610',
  width: 140,
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


export const CustomBtn = () => {
  return (
    <SliderBtn>

    <BtnText>
      <PrimaryText text={'تهیه بلیت '} weight={600}  size={18}/>
    </BtnText>

    <PlayBtn>
      <Image alt='sharp' src='/shape2.png' width={14} height={13} />
    </PlayBtn>
  </SliderBtn>
  )
}
