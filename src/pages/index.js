import { Inter } from 'next/font/google'
import styled from '@emotion/styled'
import { Navbar } from '@/component/Navbar/Navbar'
import { TopSlider } from '@/component/sliders/topSlider/TopSlider'
import { DynamiceSlider } from '@/component/sliders/dynamicSlider/DynamiceSlider'
import { Popular } from '@/component/sliders/popular/Popular'
import { Sport } from '@/component/sliders/swipeSport/Sport'
import { AdvertiseCentered } from '@/component/advertise/advertiseCentered'
import { Latest } from '@/component/sliders/latest/Latest'
import { Banner } from '@/component/Banner/Banner'
import { Turkish } from '@/component/sliders/turkish/Turkish'
import { Ads2 } from '@/component/advertise/ads2'


const inter = Inter({ subsets: ['latin'] })


const StyledMain = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor:'#202735'
})

export default function Home() {
  return (
    <StyledMain >
      <Navbar/>
      <TopSlider />
      
      <DynamiceSlider />

      <Popular />

      <Sport />

      <AdvertiseCentered />
      
      <Latest />

      <Banner />

      <Turkish />

      <Ads2 />
    </StyledMain>
  )
}
