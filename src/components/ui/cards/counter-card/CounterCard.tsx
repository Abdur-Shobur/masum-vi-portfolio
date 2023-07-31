import { ICount } from '@/types/dataTypes';
import style from './style.module.css';

function CounterCard({ data }: { data: ICount }) {
	return (
		<div className={style.countItem}>
			<h1 className={style.countValue}>
				{data.value}
				{data.suffix}
			</h1>
			<p className={style.countTitle}>{data.title}</p>
		</div>
	);
}

export default CounterCard;
