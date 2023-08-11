import LayoutOne from '@/components/layout/LayoutOne';
import style from './style.module.css';
import { ReactElement } from 'react';
import MainHead from '@/components/assential/MainHead';
import ContactCard from '@/components/ui/cards/contact-card';
import ContactInfo from '@/components/assential/contact-info/ContactInfo';

function ContactUs() {
	return (
		<section>
			<MainHead
				section="Contact us"
				tittle={{ t1: `Let's Talk?` }}
				subTxt="Don't wait until tomorrow. Talk to one of our consultants today and
				learn how to start leveraging your business."
			/>

			<ContactInfo />
		</section>
	);
}

export default ContactUs;

ContactUs.getLayout = function getLayout(page: ReactElement) {
	return <LayoutOne>{page}</LayoutOne>;
};
