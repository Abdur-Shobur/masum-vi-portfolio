import style from './button-arrow.module.css';

function ButtonArrow() {
	return (
		<button className={style.letsChatBtn}>
			<span>Let&apos;s Chat!</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="41"
				height="13"
				viewBox="0 0 41 13"
				fill="none"
			>
				<path
					className={style.arrowPath}
					d="M40.5303 7.03033C40.8232 6.73744 40.8232 6.26257 40.5303 5.96967L35.7574 1.1967C35.4645 0.903809 34.9896 0.903809 34.6967 1.1967C34.4038 1.4896 34.4038 1.96447 34.6967 2.25736L38.9393 6.5L34.6967 10.7426C34.4038 11.0355 34.4038 11.5104 34.6967 11.8033C34.9896 12.0962 35.4645 12.0962 35.7574 11.8033L40.5303 7.03033ZM-6.55671e-08 7.25L40 7.25L40 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
					fill="#162E2A"
				/>
			</svg>
		</button>
	);
}

export default ButtonArrow;
