'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper max-w-[1260px] mx-auto h-[600px]"
      >
        <SwiperSlide>
          <Image
            src='/slide.png'
            alt='Picture of the author'
            width={1260}
            height={600}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/slide.png'
            alt='Picture of the author'
            width={1260}
            height={600}
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
