import { BoxCol } from '@/component/avatar/UserAvatar'
import { PrimaryText } from '@/component/fonts/PrimaryFonts'
import { SecondaryText } from '@/component/fonts/SecondaryFonst'
import { BoxRow } from '@/component/Navbar/Navbar'
import styled from '@emotion/styled'
import { height } from '@mui/system'
import React from 'react'
import { SwiperPop } from './SwiperPop'



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
  position: 'relative'
})


export const Popular = () => {
  return (
    <StyledBoxCol>
      <Title   width={'100%'} justify={'space-between'}>

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

       
            <Badge>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.38121 8.42174C3.30751 6.87135 1.8297 5.16596 1.02278 4.20722C0.772996 3.91044 0.691151 3.69325 0.641939 3.31067C0.473429 2.00067 0.389174 1.34567 0.773295 0.922835C1.15742 0.5 1.8367 0.5 3.19527 0.5H12.8047C14.1633 0.5 14.8426 0.5 15.2267 0.922835C15.6108 1.34567 15.5266 2.00067 15.3581 3.31067C15.3089 3.69326 15.227 3.91045 14.9772 4.20722C14.1692 5.16718 12.6884 6.87559 10.6105 8.42795C10.4225 8.5684 10.2986 8.79728 10.2756 9.05117C10.0697 11.3266 9.87991 12.573 9.76176 13.2035C9.57105 14.2214 8.12764 14.8338 7.35501 15.3803C6.89505 15.7055 6.33692 15.3183 6.27731 14.8148C6.16369 13.8551 5.94967 11.9053 5.71606 9.05117C5.69507 8.79495 5.57071 8.5634 5.38121 8.42174Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Badge>

         </BoxRow>

        <BoxRow>
          <SecondaryText text={'مشاهده بیشتر'} size={13} weight={500} />
          <PrimaryText text={'پرمخاطب'} size={23} weight={700} color={'#686281'} />
        </BoxRow>
    
      </Title>

       <SwiperPop />

    </StyledBoxCol>
  )
}
