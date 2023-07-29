import Image from 'next/image';
import { Inter } from 'next/font/google';
import ProjectInMind from '@/components/assential/project-in-mind/ProjectInMind';
import Footer from '@/components/assential/footer/Footer';
import ContactInfo from '@/components/assential/contact-info/ContactInfo';
import Faq from '@/components/assential/faq/Faq';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className="bg-white ">
			<Faq />
			<ContactInfo />
			<ProjectInMind />
			<Footer />
		</main>
	);
}
