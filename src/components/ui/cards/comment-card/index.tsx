import Image from 'next/image';
import style from './style.module.css';
import { DummyImg } from '@/lib/Icon';

function CommentCard() {
	return (
		<div className={`${style.cardWrap}`}>
			<div className={style.userProfile}>
				<Image alt="User" className={style.user} src={DummyImg.usr} />
			</div>
			<div className={style.Contents}>
				<h2 className={style.userName}>Jhon Smith</h2>
				<p className={style.comments}>
					Consistent Branding: Consistency in branding is essential for creating
					a cohesive and professional website. Use consistent colors, fonts, and
					imagery that align with your brand identity. This helps in
					establishing brand recognition
				</p>
				<p className={style.perCommentReplay}>2 Reply </p>
				<div className={style.replaySections}>
					<div className={style.ReplayCard}>
						<div className={style.userProfile}>
							<Image alt="User" className={style.user} src={DummyImg.usr} />
						</div>
						<div className={style.Contents}>
							<h2 className={style.userName}>Jhon Smith</h2>
							<p className={style.comments}>
								Consistent Branding: Consistency in branding is essential for
								creating a cohesive and professional website. Use consistent
								colors, fonts, and imagery that align with your brand identity.
								This helps in establishing brand recognition
							</p>
							<p className={style.perCommentReplay}>2 Reply </p>
						</div>
					</div>
					<div className={style.ReplayCard}>
						<div className={style.userProfile}>
							<Image alt="User" className={style.user} src={DummyImg.usr} />
						</div>
						<div className={style.Contents}>
							<h2 className={style.userName}>Jhon Smith</h2>
							<p className={style.comments}>
								Consistent Branding: Consistency in branding is essential for
								creating a cohesive and professional website. Use consistent
								colors, fonts, and imagery that align with your brand identity.
								This helps in establishing brand recognition
							</p>
							<p className={style.perCommentReplay}>2 Reply </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CommentCard;
