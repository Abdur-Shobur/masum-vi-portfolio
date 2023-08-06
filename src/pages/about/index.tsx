import MainHead from '@/components/assential/MainHead';
import LayoutOne from '@/components/layout/LayoutOne';
import React, { ReactElement } from 'react';
import style from './about.module.css';
import Image from 'next/image';
import Icons from '@/lib/Icon';

function About() {
	return (
		<div>
			<MainHead section="About Me" tittle={{ t1: 'Unveiling Story', t2: '' }} />
			<div className={style.imageBox}>
				<Image
					className={style.galleryImage}
					alt="gallery image"
					src={Icons.galleryImage}
				/>
			</div>

			<div className={style.aboutWrap}>
				<div className={style.aboutWrap__left}></div>
				<div className={style.aboutWrap__right}></div>
			</div>
		</div>
	);
}

export default About;
About.getLayout = function getLayout(page: ReactElement) {
	return <LayoutOne>{page}</LayoutOne>;
};
