import MainHead from '@/components/assential/MainHead';
import LayoutOne from '@/components/layout/LayoutOne';
import React, { ReactElement } from 'react';
import style from './blog.module.css';
import SearchBox from '@/components/ui/search';
import Articles from '@/components/assential/articles';

function Blog() {
	return (
		<div className="layout">
			<MainHead
				section="Blog"
				tittle={{ t1: 'Articles & ', t2: 'Resources' }}
			/>
			<SearchBox />
			<Articles />
		</div>
	);
}

export default Blog;

Blog.getLayout = function getLayout(page: ReactElement) {
	return <LayoutOne>{page}</LayoutOne>;
};
