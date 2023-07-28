import Icons from '@/libs/Icon';
import { IButton } from '@/types/uiTypes';
import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
function Button({ text, action, icon = false, type = 'button' }: IButton) {
	return (
		<button className={style.button} type={type} onClick={() => action}>
			<span>{text}</span>
			{icon && (
				<span>
					<Image src={Icons.Arrow1} alt="Arrow-Icon" />
				</span>
			)}
		</button>
	);
}

export default Button;
