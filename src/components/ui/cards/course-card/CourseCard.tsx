import Image from 'next/image';
import style from './style.module.css';
import Icons from '@/lib/Icon';
import { ICoursesData } from '@/types/dataTypes';

function CourseCard({ data }: { data: ICoursesData }) {
	return (
		<div className={style.card}>
			<div className={style.imgBox}>
				<Image alt="courses" src={data.img} className={style.img} />
			</div>
			<div className={style.categories}>
				<span className={style.category}>{data.category}</span>
			</div>
			<h1 className={style.name}>{data.name}</h1>
			<div className={style.info}>
				<div className={style.enrolled}>
					<Icons.User className={style.ico} /> {data.enroll} (Enrolled)
				</div>
				<div className={style.reviews}>
					<Icons.Start className={style.ico} />
					{data.star} ({data.review}k reviews)
				</div>
			</div>
			<div className={style.priceBox}>
				<div className={style.pp}>
					<span className={style.curPrice}>${data.curPrice}</span>
					<span className={style.prePrice}>${data.prePrice}</span>
				</div>
				<div className={style.buyBtn}>
					<button className={style.buyNowBtn}>
						<span>Buy Now </span>{' '}
						<Icons.RightArrow className={style.btnArrow} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
