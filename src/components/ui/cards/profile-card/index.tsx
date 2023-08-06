import Image from 'next/image';
import style from './profile-card.module.css';
import Icons, { MasumBillahImage } from '@/lib/Icon';
import Link from 'next/link';

function ProfileCard() {
	return (
		<div>
			<div className={style.profileImage}>
				<Image alt="masum billah " src={MasumBillahImage.BannerImage} />
			</div>
			<div className={style.profileBody}>
				<div className="">
					<h1 className={style.name}>Md Masum Billah ✅</h1>
					<p className={style.position}>FOREX TRADER</p>
				</div>
				<div className={style.followers}>
					<div className={style.followers__left}>
						<span className={style.foll_txt}>followers</span>
						<span className={style.foll_value}>1.5k</span>
					</div>
					<div className={style.followers__right}>
						<span className={style.foll_txt}>Joined</span>
						<span className={style.foll_value}>May 12, 2020</span>
					</div>
				</div>
				<button className={style.connectBtn}>Connect with me</button>
				<div className={style.socialLinks}>
					<Link className={style.ico} href={'/'}>
						<Icons.Instagram />
					</Link>
					<Link className={style.ico} href={'/'}>
						<Icons.FacebookRound />
					</Link>
					<Link className={style.ico} href={'/'}>
						<Icons.Linkedin />
					</Link>
					<Link className={style.ico} href={'/'}>
						<Icons.youTube />
					</Link>
				</div>
				<p className={style.about__me}>
					With a remarkable track record spanning over 8 years, I excel in
					various domains, including Metal (Gold) & Forex Trading, Trading
					Analysis, Equity Trading, Digital Marketing, Entrepreneurship, and
					Freelancing.
				</p>
			</div>
		</div>
	);
}

export default ProfileCard;
