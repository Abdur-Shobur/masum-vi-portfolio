import Icons from '@/lib/Icon';
import style from './contact-info-card.module.css';

function ContactInfoCard({
	Icon,
	title,
	subTitle,
}: {
	Icon: any;
	title: any;
	subTitle: any;
}) {
	return (
		<div className={style.wrap}>
			<div className={style.icoBox}>
				{Icon && <Icon className={style.ico} />}
			</div>
			<div className={style.content}>
				<h6 className={style.title}>{title}</h6>
				<p className={style.subTitle}>{subTitle}</p>
			</div>
		</div>
	);
}

export default ContactInfoCard;
