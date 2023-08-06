import React, { ReactNode } from 'react';
import Footer from '../assential/footer/Footer';
import DesktopNav from './desktop-nav/DesktopNav';
import ProjectInMind from '../assential/project-in-mind/ProjectInMind';

interface LayoutOneProps {
	children: ReactNode;
}

export default function LayoutOne({ children }: LayoutOneProps) {
	return (
		<>
			<DesktopNav />
			<main>{children}</main>
			<ProjectInMind />
			<Footer />
		</>
	);
}
