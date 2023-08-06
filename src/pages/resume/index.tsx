import MainHead from '@/components/assential/MainHead';
import LayoutOne from '@/components/layout/LayoutOne';
import React, { ReactElement } from 'react';
import style from './resume.module.css';
import Image from 'next/image';
import { Bg } from '@/lib/Icon';
function Resume() {
	return (
		<div className="layout">
			<MainHead section="About Me" tittle={{ t1: 'Unveiling Story', t2: '' }} />
			<div className={style.imageBox}>
				<Image
					className={style.Bgresume}
					alt="gallery image"
					src={Bg.Bgresume}
				/>
			</div>
		</div>
	);
}

export default Resume;

Resume.getLayout = function getLayout(page: ReactElement) {
	return <LayoutOne>{page}</LayoutOne>;
};
