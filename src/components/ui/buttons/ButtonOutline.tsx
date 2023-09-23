import Icons from '@/lib/Icon';
import { IButton } from '@/types/uiTypes';
import Image from 'next/image';
import style from './style.module.css';
function ButtonOutline({
	text,
	action,
	icon = false,
	type = 'button',
	onClick,
}: IButton) {
	return (
		<button
			className={`${style.button} ${style.ButtonOutline}`}
			type={type}
			onClick={onClick}
		>
			<span>{text}</span>
			{icon && (
				<span>
					<Image src={Icons.Arrow1} alt="Arrow-Icon" />
				</span>
			)}
		</button>
	);
}

export default ButtonOutline;
