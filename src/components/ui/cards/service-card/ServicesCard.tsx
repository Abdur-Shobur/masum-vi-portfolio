import Image from 'next/image';
import style from './style.module.css';
import { IService } from '@/types/dataTypes';

function ServicesCard({ data }: { data: IService }) {
	return (
		<div className={style.card}>
			<div className={style.iconBox}>
				<Image alt="icon" className={style.img} src={data.icon} />
			</div>
			<h1 className={style.title}>{data.title}</h1>
			<p className={style.subTxt}>{data.subText}</p>
		</div>
	);
}

export default ServicesCard;
