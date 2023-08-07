import Image from 'next/image';
import style from './articles.module.css';
import Icons from '@/lib/Icon';

function ArticleCard() {
	return (
		<div className={style.card}>
			<Image alt="" src={''} className={style.img} />
			<div className={style.contentArea}>
				<h1 className={style.tittle}>From Code to Creation</h1>
				<p className={style.subTittle}>
					In the ever-evolving digital landscape, staying ahead of the curve in
					web maintenance is crucial for businesses to maintain optimal website
					performance and user satisfac..
				</p>
				<p className={style.timeBox}>
					<span className={style.line}></span>{' '}
					<span className={style.time}>December 12, 2023 </span>
				</p>
			</div>
		</div>
	);
}

export default ArticleCard;
