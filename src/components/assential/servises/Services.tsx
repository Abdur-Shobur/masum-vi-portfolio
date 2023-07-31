import Header from '@/components/ui/header/Header';
import style from './style.module.css';
import { servicesData, testimonialData } from '@/lib/data/data';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ServicesCard from '@/components/ui/cards/service-card/ServicesCard';
function Services() {
	return (
		<section className={style.services}>
			<Header
				section="our services"
				tittle={{ t1: 'Unleashing The ', t2: 'Potential' }}
			/>

			<div className={style.sliderArea}>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Navigation, Virtual, Pagination]}
					className={'testimonial-slider-custom-class-lksdfkj'}
					breakpoints={{
						// when window width is >= 768px (tablet screens)
						650: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						// when window width is >= 1024px (desktop screens)
						950: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
				>
					{servicesData.map((e, i) => (
						<SwiperSlide key={e.id} virtualIndex={i}>
							<ServicesCard key={e.id} data={e} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Services;
