import React, { ReactNode } from 'react';
import Footer from '../assential/footer/Footer';
import ProjectInMind from '../assential/project-in-mind/ProjectInMind';
import DesktopNav2 from './desktop-nav/DesktopNav2';

interface LayoutOneProps {
	children: ReactNode;
}

export default function LayoutTwo({ children }: LayoutOneProps) {
	return (
		<>
			<DesktopNav2 />
			<main>{children}</main>
			<ProjectInMind />
			<Footer />
		</>
	);
}
