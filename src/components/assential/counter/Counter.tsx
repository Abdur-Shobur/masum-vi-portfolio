import { counterData } from '@/lib/data/data';
import style from './style.module.css';
import CounterCard from '@/components/ui/cards/counter-card/CounterCard';

function Counter() {
	return (
		<section className={style.counterBox}>
			{counterData.map((e) => (
				<CounterCard key={e.id} data={e} />
			))}
		</section>
	);
}

export default Counter;
