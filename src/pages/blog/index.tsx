import MainHead from '@/components/assential/MainHead';
import React, { ReactElement } from 'react';
import style from './blog.module.css';
import SearchBox from '@/components/ui/search';
import Articles from '@/components/assential/articles';
import Pagination from '@/components/ui/pagination';
import LayoutTwo from '@/components/layout/LayoutTwo';

function Blog() {
	return (
		<div className="layout">
			<MainHead
				section="Blog"
				tittle={{ t1: 'Articles & ', t2: 'Resources' }}
			/>
			<SearchBox />
			<Articles />
			<Pagination />
		</div>
	);
}

export default Blog;

Blog.getLayout = function getLayout(page: ReactElement) {
	return <LayoutTwo>{page}</LayoutTwo>;
};
