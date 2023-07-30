'use client';
import Header from '@/components/ui/header/Header';
import style from './style.module.css';
import { AccordionDemo } from '@/components/ui/faq-items/FaqItems';
import Image from 'next/image';
import Icons from '@/lib/Icon';
import line from '../../../../public/images/line.svg';
import { useEffect } from 'react';
function Faq() {
	useEffect(() => {
		// Dynamically load the SVG to ensure it works as a background.
		// const svgImage = new Image();
		// svgImage.src = line;
	}, []);
	return (
		<section
			className={`${style.faq}`}
			// style={{ backgroundImage: `url(${line.src})` }}
		>
			<Header
				section="FAQ"
				tittle={{ t1: 'Frequently Ask', t2: ' Question' }}
			/>

			<div className={style.faqBox}>
				<AccordionDemo />
				<div className={style.imageBox}>
					<Image alt="user-icon" src={Icons.imageUser} />
				</div>
			</div>
		</section>
	);
}

export default Faq;
