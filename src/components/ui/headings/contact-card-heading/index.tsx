import Icons from '@/lib/Icon';
import style from './contact-card-heading.module.css';
const icons = {
	Contact: Icons.contact,
	Education: Icons.Education,
	Internet: Icons.Internet,
};
function ContactCardHeading({ icon = 'contact', text = '' }) {
	return (
		<div className={style.wrap}>
			{icon === 'contact' ? (
				<icons.Contact className={style.ico} />
			) : icon === 'education' ? (
				<icons.Education className={style.ico} />
			) : (
				<icons.Internet className={style.ico} />
			)}
			<h1 className={style.heading}>{text}</h1>
		</div>
	);
}

export default ContactCardHeading;
