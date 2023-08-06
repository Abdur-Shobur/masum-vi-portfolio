import MainHead from '@/components/assential/MainHead';
import LayoutOne from '@/components/layout/LayoutOne';
import React, { ReactElement } from 'react';
import style from './service-&-traning.module.css';
import Image from 'next/image';
import { MasumBillahImage } from '@/lib/Icon';
import Services from '@/components/assential/servises/Services';
import Courses from '@/components/assential/courses/Courses';
import Counter from '@/components/assential/counter/Counter';
import Faq from '@/components/assential/faq/Faq';
function ServiceAndTraining() {
	return (
		<div className="layout">
			<MainHead
				section="Services & Training"
				tittle={{ t1: 'Digital', t2: ' Solutions' }}
			/>
			<div className={style.imageBox}>
				<Image
					className={style.galleryImage}
					alt="gallery image"
					src={MasumBillahImage.galleryImage2}
				/>
			</div>
			<Services />
			<Counter />
			<Courses />
			<Faq />
		</div>
	);
}

export default ServiceAndTraining;
ServiceAndTraining.getLayout = function getLayout(page: ReactElement) {
	return <LayoutOne>{page}</LayoutOne>;
};
