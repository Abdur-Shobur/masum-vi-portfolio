import Header from '@/components/ui/header/Header';
import style from './MainHead.module.css';
import Image from 'next/image';
import Icons from '@/lib/Icon';

function MainHead({
	section,
	tittle,
	subTxt,
}: {
	section: string;
	subTxt?: string;
	tittle: {
		t1: string;
		t2?: string;
		t3?: string;
	};
}) {
	return (
		<div className={style.mainHeadWrap}>
			<div className={style.content}>
				<Header section={section} tittle={tittle} />
				<Image alt="arrow-down" src={Icons.ArrowRoundDown} />
			</div>
			<p className={style.subTxt}>{subTxt}</p>
		</div>
	);
}

export default MainHead;
