import { IButtonIco } from '@/types/uiTypes';
import style from './button-ico.module.css';
import Link from 'next/link';

function ButtonIco({ Icon, text, link, onClick, type = 'button' }: IButtonIco) {
	if (!link) {
		return (
			<button onClick={onClick} type={type} className={`${style.btn}`}>
				<span className={style.ico}>{<Icon />}</span>
				<span className={style.beforeSqr}></span>
				<span className={style.txt}>{text}</span>
				<span className={style.dot}></span>
			</button>
		);
	}

	return (
		<Link href={link} className={`${style.btn}`}>
			<span className={style.ico}>{<Icon />}</span>
			<span className={style.beforeSqr}></span>
			<span className={style.txt}>{text}</span>
			<span className={style.dot}></span>
		</Link>
	);
}

export default ButtonIco;
