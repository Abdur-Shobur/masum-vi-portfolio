import TestimonialCard from '@/components/ui/cards/testimonial-card/TestimonialCard';
import Header from '@/components/ui/header/Header';
import style from './style.module.css';
import { testimonialData } from '@/lib/data/data';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function Testimonial() {
	return (
		<section className={style.testimonial}>
			<Header
				section="Testimonial"
				tittle={{ t1: 'we’ve had the', t2: ' pleasure', t3: ' to work with' }}
			/>
			<div className={style.cardWrap}></div>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={false}
				navigation={true}
				modules={[Navigation, Virtual]}
				className="mySwiper"
			>
				{testimonialData.map((e, i) => (
					<SwiperSlide key={e.id} virtualIndex={i}>
						<TestimonialCard key={e.id} data={e} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Testimonial;
