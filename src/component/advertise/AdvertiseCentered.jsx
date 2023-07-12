import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { BackgroundBtn } from '../btn/backgroundBtn'
import { PrimaryText } from '../fonts/PrimaryFonts'


const BackgroundImage = styled.div({
  width: '100%',
  height: 300,
  backgroundImage: 'url(/background.png)',
  objectFit: 'cover',
})

const BoxText = styled.div({
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 220,
  gap: 50,
  marginTop: 30
})

const BgContainer = styled.div({
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  flexDirection: 'row',

})


export const AdvertiseCentered = () => {
  return (
    <BackgroundImage>
      
      <BgContainer>
        
        <Image src={'/01.png'} alt='01' width={125} height={240} style={{marginTop: -25}}/>
        <Image src={'/02.png'} alt='02' width={123} height={268} />
         <BoxText>
            <PrimaryText text={`تماشــای فیلم‌هـــای
              ایرانــــی و خارجـــــی
              بـه روز در منـــه بـــاخ`} size={25} weight={900} />

            <BackgroundBtn />
          </BoxText>

        <Image src={'/03.png'} alt='03'style={{marginTop: -25}} width={130} height={240} />
        <Image src={'/04.png'} alt='04' width={122} height={267} />
      </BgContainer>
    </BackgroundImage>

  )
}
