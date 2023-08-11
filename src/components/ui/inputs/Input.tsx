import { IInput } from '@/types/uiTypes';
import style from './style.module.css';

function Input({ label, name, type = 'text', placeholder }: IInput) {
	return (
		<div className={style.wrap}>
			<label className={style.label} htmlFor={name}>
				{label}
			</label>
			<input
				className={`${style.input}`}
				type={type}
				id={name}
				placeholder={placeholder}
			/>
			{/* <span className={style.border}></span> */}
		</div>
	);
}

export default Input;
