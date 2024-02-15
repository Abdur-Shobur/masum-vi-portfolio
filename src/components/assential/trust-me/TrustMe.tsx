import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual, Pagination } from 'swiper/modules';
// Import Swiper styles
import { OurPartner } from './image/data';
import style from './style.module.css';
import TrustItem from './TrustItem';

function TrustMe() {
	return (
		<section className="layout">
			<div className="my-10 md:my-24">
				<h1 className={style.sectionTitle}>
					PROUDLY DISPLAYING MY TRUSTED CLIENTELE: LEADING BRANDS WHO TRUST ME!
				</h1>

				{/* slider  */}
				<div>
					<Swiper
						slidesPerView={5}
						spaceBetween={10}
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
								slidesPerView: 5,
								spaceBetween: 30,
							},
						}}
					>
						{OurPartner.map((e, i) => (
							<SwiperSlide key={i} virtualIndex={i}>
								<TrustItem />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}

export default TrustMe;
