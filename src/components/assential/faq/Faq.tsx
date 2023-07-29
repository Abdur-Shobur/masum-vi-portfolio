'use client';
import Header from '@/components/ui/header/Header';
import style from './style.module.css';

function Faq() {
	return (
		<section className={style.faq}>
			<Header
				section="FAQ"
				tittle={{ t1: 'Frequently Ask', t2: ' Question' }}
			/>

			<div className="faqBox">
				<div className="join join-vertical w-full">
					<div className="collapse collapse-arrow join-item border border-base-300">
						<input type="radio" name="my-accordion-4" />
						<div className="collapse-title text-xl font-medium">
							Click to open this one and close others
						</div>
						<div className="collapse-content">
							<p>hello</p>
						</div>
					</div>
					<div className="collapse collapse-arrow join-item border border-base-300">
						<input type="radio" name="my-accordion-4" />
						<div className="collapse-title text-xl font-medium">
							Click to open this one and close others
						</div>
						<div className="collapse-content">
							<p>hello</p>
						</div>
					</div>
					<div className="collapse collapse-arrow join-item border border-base-300">
						<input type="radio" name="my-accordion-4" />
						<div className="collapse-title text-xl font-medium">
							Click to open this one and close others
						</div>
						<div className="collapse-content">
							<p>hello</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faq;
