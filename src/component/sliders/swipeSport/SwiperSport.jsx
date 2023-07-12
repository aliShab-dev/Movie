import styled from '@emotion/styled'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation, Pagination, EffectFade, EffectFlip, EffectCube, EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { BoxColEnd, BoxShadow } from '../popular/SwiperPop';
import { PrimaryText } from '@/component/fonts/PrimaryFonts';
import { SecondaryText } from '@/component/fonts/SecondaryFonst';

const SliderCard = styled(SwiperSlide)({
  display: 'flex',
  flexDirection: 'column',
  width: 310,
  height: 310,
  zIndex: 0
})


export const SwiperSport = () => {
  return (
    <>
    <Swiper
    spaceBetween={250}
    slidesPerView={4}
    loop={true}
    modules={[Autoplay]}
    // autoplay={{delay: 2300, disableOnInteraction: false}}
    style={{direction:'rtl', 
    width: '100%', 
    height: '420px',
    backgroundColor:"transparent",
    }}>
    
    {
      popMovie.map(slide => (

   
    <SliderCard key={slide.nameEn}>
      <Image src={slide.img} alt={slide.nameFa} width={310} height={250} style={{zIndex: 10}}/>
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
  {img: '/footBall.png', nameFa: 'فوتبال غرب', nameEn: 'West Football'},
  {img: '/westBall.png', nameFa: 'فوتبال غرب', nameEn: 'Western Football'},
  {img: '/joker.png', nameFa: 'فوتبال غرب', nameEn: 'Eastern Football'},
  {img: '/baseBall.png', nameFa: 'فوتبال غرب ', nameEn: 'Baseball'},
  {img: '/westBall.png', nameFa: 'فوتبال غرب', nameEn: 'Hockey'},

]
