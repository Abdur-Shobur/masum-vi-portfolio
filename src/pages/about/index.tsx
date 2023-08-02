import LayoutOne from '@/components/layout/LayoutOne';
import React from 'react';

function About() {
	return <div>About</div>;
}

export default About;
About.getLayout = function getLayout(page: ReactElement) {
	return <LayoutOne>{page}</LayoutOne>;
};
