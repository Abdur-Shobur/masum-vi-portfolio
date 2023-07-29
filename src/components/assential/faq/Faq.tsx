'use client';
import Header from '@/components/ui/header/Header';
import style from './style.module.css';
import { AccordionDemo } from '@/components/ui/faq-items/FaqItems';
import Image from 'next/image';
import Icons from '@/lib/Icon';

function Faq() {
	return (
		<section className={style.faq}>
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
