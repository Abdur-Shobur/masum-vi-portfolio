import Image from 'next/image';
import style from './style.module.css';
import { MasumBillahImage } from '@/lib/Icon';
import { SocialIcon1 } from '../../social';

function ProfileInfoAndShare() {
	return (
		<div className={style.wrap}>
			<div className={style.user}>
				<div className={style.img}>
					<Image
						className={style.userImage}
						alt="masum"
						src={MasumBillahImage.profile}
					/>
				</div>
				<div className={style.contents}>
					<h1 className={style.name}>Md Masum Billah</h1>
					<p className={style.details}>
						<span>May 12, 2023</span>
						<span>Digital Marketing</span>
					</p>
				</div>
			</div>
			<div className={style.share}>
				<SocialIcon1 />
				<SocialIcon1 />
				<SocialIcon1 />
				<SocialIcon1 />
			</div>
		</div>
	);
}

export default ProfileInfoAndShare;
