import { BoxCol } from '@/component/avatar/UserAvatar';
import { PrimaryText } from '@/component/fonts/PrimaryFonts';
import { SecondaryText } from '@/component/fonts/SecondaryFonst';
import styled from '@emotion/styled';
import { positions } from '@mui/system';
import Image from 'next/image';
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation, Pagination, EffectFade, EffectFlip, EffectCube, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderCard = styled(SwiperSlide)({
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  height: 350,
  zIndex: 0
})

export const BoxColEnd = styled(BoxCol) ({
  alignItems: 'start',
  marginTop: 15,
  marginRight: 15,
  gap: 5
})

export const BoxShadow = styled.div({
  height: 370,
  width: 200,
  boxShadow: '140px -1px 70px -40px  #202735 inset',
  position: 'absolute',
  top: 50,
  left: 0,
  zIndex: 100

})


export const SwiperPop = () => {
  return (
   <>
    <Swiper
    spaceBetween={100}
    slidesPerView={5}
    loop={true}
    modules={[Navigation, Pagination,Autoplay]}
    autoplay={{delay: 2000, disableOnInteraction: false}}
    style={{direction:'rtl', 
    width: '100%', 
    height: '420px',
    backgroundColor:"transparent",
    }}>
    
    {
      popMovie.map(slide => (

   
    <SliderCard key={slide.nameEn}>
      <Image src={slide.img} alt={slide.nameFa} width={220} height={300} style={{zIndex: 10}}/>
      <BoxColEnd>
        <PrimaryText text={slide.nameFa} size={16} weight={700}/>
        <SecondaryText text={slide.nameEn} size={15} weight={500} color={'#51667D'}/>
      </BoxColEnd>
    </SliderCard>


   ))
  }

  </Swiper>
  <BoxShadow><div></div></BoxShadow>
  </>
  )
}


const popMovie = [
  {img: '/arrival.png', nameFa: 'از راه رسیده', nameEn: 'Arrival'},
  {img: '/woods.png', nameFa: 'چوب', nameEn: 'Woods'},
  {img: '/joy.png', nameFa: 'جوی شگفت انگیز', nameEn: 'Joy'},
  {img: '/joker.png', nameFa: 'جوکر', nameEn: 'Joker'},
  {img: '/lady.png', nameFa: 'خانم بیرو', nameEn: 'Lady'},
  {img: '/arrival.png', nameFa: 'از راه رسیده', nameEn: 'Mordius'},
]
