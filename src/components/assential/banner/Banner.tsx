import Button from '@/components/ui/buttons/Button';
import style from './style.module.css';
import Image from 'next/image';
import Icons, { BGShape, MasumBillahImage } from '@/lib/Icon';
import ButtonIco from '@/components/ui/buttons/ButtonIco';
import ButtonArrow from '@/components/ui/buttons/ButtonArrow';
import { TypeAnimation } from 'react-type-animation';
import TextAnimation from '@/components/ui/text-animation/TextAnimation';
import BgSvgShape from '@/lib/shape/BgSvgShape';
import BgSvgShapeFull from '@/lib/shape/BgSvgShapeFull';
import Modal from '@/components/ui/modal/Modal';
import { useState } from 'react';

function Banner({ open, setOpen }: { open: boolean; setOpen: Function }) {
	return (
		<section className={style.mainBannerSec}>
			<span className={style.bgRoundShape}></span>
			<BgSvgShapeFull />
			<div className={style.banner}>
				<div className={style.wrap}>
					<div className={style.__left}>
						<span className={style.pill}>I&apos;M GLAD YOU&apos;RE HERE.</span>
						<h1 className={style.name}>
							I&apos;m{' '}
							<span className={style.mainName}>
								MD Masum Billah <span className={style.nameBefore}></span>
							</span>
						</h1>

						<TextAnimation />

						<p className={style.subText}>
							With a remarkable track record spanning over 8 years, I excel in
							various domains, including Metal (Gold) & Forex Trading, Trading
							Analysis, Equity Trading, Digital Marketing, Entrepreneurship, and
							Freelancing.
						</p>
						<div className={style.btnBox}>
							{/* <Button text="" /> */}
							<ButtonIco
								Icon={Icons.Call}
								text="Schedule a Call"
								onClick={() => setOpen(true)}
							/>
							<ButtonArrow />
						</div>
					</div>
					<div className={style.__right}>
						<Image
							alt="masum billah"
							className={style.profileImage}
							src={MasumBillahImage.MasumBillah2}
						/>
						<Image
							className={`${style.shape1} ${style.shape}`}
							alt="masum billah"
							src={BGShape.shape1}
						/>
						<Image
							className={`${style.shape2} ${style.shape}`}
							alt="masum billah"
							src={BGShape.shape2}
						/>
					</div>
					<span className={'colorBox'}></span>
				</div>
			</div>
		</section>
	);
}

export default Banner;
