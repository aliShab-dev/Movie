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

const SliderCard = styled(SwiperSlide)({
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  height: 350,
  zIndex: 0
})


export const SwiperLatest = () => {
  return (
    <>
    <Swiper
    spaceBetween={80}
    slidesPerView={5}
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
      <Image src={slide.img} alt={slide.nameFa}  width={220} height={300} style={{zIndex: 10}}/>
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
  {img: '/new1.png', nameFa: 'فوتبال غرب', nameEn: 'West Football'},
  {img: '/new2.png', nameFa: 'فوتبال غرب', nameEn: 'Western Football'},
  {img: '/new3.png', nameFa: 'فوتبال غرب', nameEn: 'Eastern Football'},
  {img: '/new4.png', nameFa: 'فوتبال غرب ', nameEn: 'Baseball'},
  {img: '/new5.png', nameFa: 'فوتبال غرب', nameEn: 'Hockey'},
  {img: '/new6.png', nameFa: 'فوتبال غرب', nameEn: 'Ana'},

]