import ProjectInMind from '@/components/assential/project-in-mind/ProjectInMind';
import Footer from '@/components/assential/footer/Footer';
import ContactInfo from '@/components/assential/contact-info/ContactInfo';
import Faq from '@/components/assential/faq/Faq';
import Testimonial from '@/components/assential/testimonial/Testimonial';
import Courses from '@/components/assential/courses/Courses';
import Counter from '@/components/assential/counter/Counter';
import Services from '@/components/assential/servises/Services';
import WhyChooseMe from '@/components/assential/why-choose-me/WhyChooseMe';
import Banner from '@/components/assential/banner/Banner';
import DesktopNav from '@/components/layout/desktop-nav/DesktopNav';
import LayoutOne from '@/components/layout/LayoutOne';
import { ReactElement, useState } from 'react';
import ButtonIco from '@/components/ui/buttons/ButtonIco';
import Icons from '@/lib/Icon';
import Modal from '@/components/ui/modal/Modal';
import TrustMe from '@/components/assential/trust-me/TrustMe';

export default function Home() {
	const [open, setOpen] = useState(false);
	return (
		<main className="bg-white ">
			<Banner open={open} setOpen={setOpen} />
			<TrustMe />
			<WhyChooseMe />
			<Services />
			<Counter />
			<Courses />
			<Testimonial />
			<Faq />
			<ContactInfo />
			{/* <ProjectInMind /> */}
			<Modal open={open} setOpen={setOpen} />
		</main>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <LayoutOne>{page}</LayoutOne>;
};
