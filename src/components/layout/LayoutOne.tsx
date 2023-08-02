import React, { ReactNode } from 'react';
import Footer from '../assential/footer/Footer';
import DesktopNav from './desktop-nav/DesktopNav';

interface LayoutOneProps {
	children: ReactNode;
}

export default function LayoutOne({ children }: LayoutOneProps) {
	return (
		<>
			<DesktopNav />
			<main>{children}</main>
			<Footer />
		</>
	);
}
