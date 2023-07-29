'use client';
import Header from '@/components/ui/header/Header';
import style from './style.module.css';
import { AccordionDemo } from '@/components/ui/faq-items/FaqItems';

function Faq() {
	return (
		<section className={style.faq}>
			<Header
				section="FAQ"
				tittle={{ t1: 'Frequently Ask', t2: ' Question' }}
			/>

			<div className="faqBox">
				<AccordionDemo />
			</div>
		</section>
	);
}

export default Faq;
