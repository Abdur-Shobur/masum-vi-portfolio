import Button from '@/components/ui/buttons/Button';
import style from './style.module.css';
import Image from 'next/image';
import Icons, { MasumBillahImage } from '@/lib/Icon';
import ButtonIco from '@/components/ui/buttons/ButtonIco';
import ButtonArrow from '@/components/ui/buttons/ButtonArrow';
import { TypeAnimation } from 'react-type-animation';

function Banner() {
	return (
		<section className={style.banner}>
			<div className={style.wrap}>
				<div className={style.__left}>
					<span className={style.pill}>I&apos;M GLAD YOU&apos;RE HERE.</span>
					<h1 className={style.name}>
						I&apos;m{' '}
						<span className={style.mainName}>
							MD Masum Billah <span className={style.nameBefore}></span>
						</span>
					</h1>

					<TypeAnimation
						sequence={[
							'Metal-Forex & Equity Trader',
							1000,
							'Teacher',
							2000,
							'Entrepreneur',
							1000,
							() => {
								console.log('Sequence completed');
							},
						]}
						wrapper="span"
						cursor={true}
						repeat={Infinity}
						className="textAnimation"
					/>

					<p className={style.subText}>
						With a remarkable track record spanning over 8 years, I excel in
						various domains, including Metal (Gold) & Forex Trading, Trading
						Analysis, Equity Trading, Digital Marketing, Entrepreneurship, and
						Freelancing.
					</p>
					<div className={style.btnBox}>
						{/* <Button text="" /> */}
						<ButtonIco Icon={Icons.Call} text="Schedule a Call" />

						<ButtonArrow />
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
