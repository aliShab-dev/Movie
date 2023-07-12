import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';
import { PrimaryText } from '@/component/fonts/PrimaryFonts';
import { SecondaryText } from '@/component/fonts/SecondaryFonst';
import styled from '@emotion/styled';
import Image from 'next/image';
import { BoxColEnd, BoxShadow } from '../popular/SwiperPop';
import { BoxCol } from '@/component/avatar/UserAvatar';
import { CustomBtn } from './CustomBtn';



const SliderCard = styled(SwiperSlide)({
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  height: 350,
  zIndex: 0,
  position: 'relative'
})

const ImgShadow = styled.div({
  height: 250,
  width: 355,
  boxShadow: '1px -75px 35px -18px #202735 inset',
  position: 'absolute',
  top: 50,
  left: -42,
})

export const BoxColInsert = styled(BoxCol) ({
  position: 'absolute',
  bottom: 180,
  alignItems: 'start',
  marginRight: 15,
  gap: 5,
  zIndex: 99,
})

export const TurkishSwiprt = () => {
  return (

    <>
    <Swiper
    spaceBetween={80}
    slidesPerView={3}
    loop={true}
    modules={[Autoplay]}
    autoplay={{delay: 2300, disableOnInteraction: false}}
    style={{direction:'rtl', 
    width: '100%', 
    height: '440px',
    backgroundColor:"transparent",
    }}>
    
    {
      popMovie.map(slide => (

   
    <SliderCard key={slide.nameEn}>
      <Image src={slide.img} alt={slide.nameFa} width={350} height={300} style={{zIndex: 10}} />
      <BoxColInsert>
        <SecondaryText text={slide.nameFa} size={18} weight={600} color={'#fff'}/>
        <PrimaryText text={slide.nameEn} size={24} weight={700}/>
      </BoxColInsert>
      <ImgShadow><div></div></ImgShadow>
      <CustomBtn/>
    </SliderCard>
   ))
  }
  </Swiper>
  <BoxShadow><div></div></BoxShadow>
  </>
  )
}



const popMovie = [
  {img: '/joker.png', nameFa: ' اکران آنلاین', nameEn: 'West Football'},
  {img: '/inter.png', nameFa: ' اکران آنلاین', nameEn: 'Intersettelar'},
  {img: '/clearing.png', nameFa: ' اکران آنلاین', nameEn: 'Clearing'},
  {img: '/unknown.png', nameFa: ' اکران آنلاین ', nameEn: 'Sharelock'},
  {img: '/new6.png', nameFa: ' اکران آنلاین', nameEn: 'Ana'},
]