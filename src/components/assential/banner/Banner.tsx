import Button from '@/components/ui/buttons/Button';
import style from './style.module.css';
import Image from 'next/image';
import { MasumBillahImage } from '@/lib/Icon';

function Banner() {
	return (
		<section className={style.banner}>
			<div className={style.wrap}>
				<div className={style.__left}>
					<span className={style.pill}>I&apos;M GLAD YOU&apos;RE HERE.</span>
					<h1 className={style.name}>I&apos;m MD Masum Billah</h1>
					<p className={style.textAnimation}>Metal-Forex & Equity Trader</p>
					<p className={style.subText}>
						With a remarkable track record spanning over 8 years, I excel in
						various domains, including Metal (Gold) & Forex Trading, Trading
						Analysis, Equity Trading, Digital Marketing, Entrepreneurship, and
						Freelancing.
					</p>
					<div className={style.btnBox}>
						<Button text="Schedule a Call" />
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
									d="M40.5303 7.03033C40.8232 6.73744 40.8232 6.26257 40.5303 5.96967L35.7574 1.1967C35.4645 0.903809 34.9896 0.903809 34.6967 1.1967C34.4038 1.4896 34.4038 1.96447 34.6967 2.25736L38.9393 6.5L34.6967 10.7426C34.4038 11.0355 34.4038 11.5104 34.6967 11.8033C34.9896 12.0962 35.4645 12.0962 35.7574 11.8033L40.5303 7.03033ZM-6.55671e-08 7.25L40 7.25L40 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
									fill="#162E2A"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className={style.__right}>
					<Image alt="masum billah" src={MasumBillahImage.BannerImage} />
				</div>
			</div>
		</section>
	);
}

export default Banner;
