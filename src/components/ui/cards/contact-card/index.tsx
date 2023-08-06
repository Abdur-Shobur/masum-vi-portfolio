import Icons from '@/lib/Icon';
import ContactCardHeading from '../../headings/contact-card-heading';
import ContactInfoCard from '../contact-info-card';
import style from './contact-style.module.css';

function ContactCard() {
	return (
		<div>
			<ContactCardHeading text={'Contact'} icon="contact" />
			<ContactInfoCard
				Icon={Icons.Call}
				subTitle={'+278 5678 8901'}
				title={'Phone'}
			/>
			<ContactInfoCard
				Icon={Icons.Mail}
				subTitle={'tanji@gmail.com'}
				title={'Email'}
			/>
			<ContactInfoCard
				Icon={Icons.Map}
				subTitle={'12, MK Street, NC, 452768.'}
				title={'Address'}
			/>
		</div>
	);
}

export default ContactCard;
