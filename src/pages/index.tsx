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
import { ReactElement } from 'react';

export default function Home() {
	return (
		<main className="bg-white ">
			<Banner />
			<WhyChooseMe />
			<Services />
			<Counter />
			<Courses />
			<Testimonial />
			<Faq />
			<ContactInfo />
			{/* <ProjectInMind /> */}
		</main>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <LayoutOne>{page}</LayoutOne>;
};
