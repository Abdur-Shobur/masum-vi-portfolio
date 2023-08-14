import React, { ReactNode } from 'react';
import Footer from '../assential/footer/Footer';
import DesktopNav from './desktop-nav/DesktopNav';
import ProjectInMind from '../assential/project-in-mind/ProjectInMind';
import GetStart from '../assential/get-start';

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
		</>
	);
}
