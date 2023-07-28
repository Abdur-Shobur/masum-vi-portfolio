import Image from 'next/image';
import { Inter } from 'next/font/google';
import ProjectInMind from '@/components/assential/project-in-mind/ProjectInMind';
import Footer from '@/components/assential/footer/Footer';
import ContactInfo from '@/components/assential/contact-info/ContactInfo';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className="bg-white ">
			<ContactInfo />
			<ProjectInMind />
			<Footer />
		</main>
	);
}
