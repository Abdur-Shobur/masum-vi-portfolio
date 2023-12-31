import TestimonialCard from '@/components/ui/cards/testimonial-card/TestimonialCard';
import Header from '@/components/ui/header/Header';
import style from './style.module.css';
import { testimonialData } from '@/lib/data/data';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Testimonial() {
	return (
		<section className={style.testimonial}>
			<Header
				section="Testimonial"
				tittle={{ t1: 'we’ve had the', t2: ' pleasure', t3: ' to work with' }}
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
					{testimonialData.map((e, i) => (
						<SwiperSlide key={e.id} virtualIndex={i}>
							<TestimonialCard key={e.id} data={e} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Testimonial;
