import { BoxCol } from '@/component/avatar/UserAvatar'
import { PrimaryText } from '@/component/fonts/PrimaryFonts'
import { SecondaryText } from '@/component/fonts/SecondaryFonst'
import { BoxRow } from '@/component/Navbar/Navbar'
import styled from '@emotion/styled'
import React from 'react'
import { SwiperLatest } from './SwiperLatest'



export const Badge = styled.div(props => ({
  width: 30,
  height: 30 ,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:props.backcolor || 'rgba(255, 255, 255, .15)',  

}))

export const Title = styled(BoxRow) ({
  margin: '0 auto'
})

export const StyledBoxCol = styled(BoxCol) ({
  width: '80%',
  margin: '0 auto',
  position: 'relative',
  marginTop: 60
})

export const Latest = () => {
  return (
    <StyledBoxCol>
    <Title width={'100%'} justify={'space-between'}>

       <BoxRow spacing={'0px'}>
       
          <Badge backcolor={'transparent'}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1L1.70711 6.29289C1.37377 6.62623 1.20711 6.79289 1.20711 7C1.20711 7.20711 1.37377 7.37377 1.70711 7.70711L7 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Badge>

          <Badge backcolor={'transparent'}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L6.29289 6.29289C6.62623 6.62623 6.79289 6.79289 6.79289 7C6.79289 7.20711 6.62623 7.37377 6.29289 7.70711L1 13" stroke="#686281" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Badge>

       </BoxRow>

      <BoxRow>
        <SecondaryText text={'مشاهده بیشتر'} size={13} weight={500} />
        <PrimaryText text={'تازه‌ها'} size={23} weight={700} color={'#686281'} />
      </BoxRow>
  
    </Title>

    <SwiperLatest />
  

  </StyledBoxCol>
  )
}
