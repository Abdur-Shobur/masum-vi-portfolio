import React, { ReactNode } from 'react';
import Footer from '../assential/footer/Footer';
import DesktopNav from './desktop-nav/DesktopNav';
import ProjectInMind from '../assential/project-in-mind/ProjectInMind';
import GetStart from '../assential/get-start';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Icons, { coursesImages } from '@/lib/Icon';
import img from '../../../public/images/Masum-Billah-QB34 2.svg';
interface LayoutOneProps {
	children: ReactNode;
}

export default function LayoutOne({ children }: LayoutOneProps) {
	return (
		<>
			<DesktopNav />
			<main>{children}</main>
			<GetStart />
			<Footer />
			<FloatingWhatsApp
				phoneNumber="+8801734659001"
				accountName="MD Masum Billah"
				allowEsc
				allowClickAway
				notification
				notificationSound
				avatar={
					'http://localhost:8080/_next/static/media/banner-bg.a22c9450.svg'
				}
			/>
		</>
	);
}
