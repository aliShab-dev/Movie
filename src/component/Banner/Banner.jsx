import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { BoxCol } from '../avatar/UserAvatar'
import { PrimaryText } from '../fonts/PrimaryFonts'
import { BoxRow } from '../Navbar/Navbar'
import { BannerBtn } from './BannerBtn'




const BannerContainer = styled.div({
  background: 'linear-gradient(90deg,rgba(42,50,67,0) 0%, #2a3243 100%)',
  width: '80%',
  margin: '0 auto',
  height: 300,
  borderRadius: 20
})

const BannerBox = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 30
})



export const Banner = () => {
  return (
    <BannerContainer>
      <BannerBox>
        <Image src={'/banner.png'} alt='banner-img' width={700} height={250} />
        <BoxCol>
          <PrimaryText direction={'rtl'} text={`هرچقدر بیشتر فیلم ببینی
            میلیونر میشی ...`} weight={900} size={28} />
          <BannerBtn />
        </BoxCol>
      </BannerBox>
    </BannerContainer>

  )
}
