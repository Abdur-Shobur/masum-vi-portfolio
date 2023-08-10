import MainHead from '@/components/assential/MainHead';
import style from './style.module.css';
import SearchBox from '@/components/ui/search';
import Articles from '@/components/assential/articles';
import Pagination from '@/components/ui/pagination';
import LayoutTwo from '@/components/layout/LayoutTwo';
import { ReactElement } from 'react';

function PersonalBlog() {
	return (
		<div className="layout">
			<MainHead
				section="Personal Blogs"
				tittle={{ t1: 'Soul Through ', t2: 'Poetry' }}
			/>
			<SearchBox />
			<Articles />
			<Pagination />
		</div>
	);
}

export default PersonalBlog;

PersonalBlog.getLayout = function getLayout(page: ReactElement) {
	return <LayoutTwo>{page}</LayoutTwo>;
};
