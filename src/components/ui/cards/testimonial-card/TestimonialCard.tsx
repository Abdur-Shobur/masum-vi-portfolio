import Image from 'next/image';
import style from './style.module.css';

function TestimonialCard({
	data,
}: {
	data: {
		id: number;
		text: string;
		userImage: any;
		userName: string;
		userPosition: string;
	};
}) {
	return (
		<div className={style.card}>
			<p className={style.txt}>{data.text}</p>
			<div className={style.info}>
				<div className={style.img}>
					<Image alt="user" src={data.userImage} />
				</div>
				<div className={style.userInfo}>
					<h6 className={style.name}>{data.userName}</h6>
					<p className={style.title}>{data.userPosition}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
