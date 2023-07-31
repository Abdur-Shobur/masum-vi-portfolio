import Header from '@/components/ui/header/Header';
import style from './style.module.css';
import CourseCard from '@/components/ui/cards/course-card/CourseCard';
import { courses } from '@/lib/data/data';
import { useState } from 'react';
import { ICoursesData } from '@/types/dataTypes';

function Courses() {
	const [tag, setTag] = useState('all');

	let filterCourses = (courses: ICoursesData) => {
		if (tag === 'all') {
			return courses;
		}
		return courses.tags.find((x) => x === tag);
	};
	return (
		<section className={style.courses}>
			<Header
				section="Courses"
				tittle={{ t1: 'Empowering Your Learning ', t2: 'Journey' }}
			/>
			<div className={style.coursesCard}>
				<div className={style.coursesLists}>
					<button
						onClick={() => setTag('all')}
						className={`${style.filterBtn} ${tag === 'all' && style.active}`}
					>
						Sell All
					</button>
					<span className={style.bar}></span>
					<button
						onClick={() => setTag('new')}
						className={`${style.filterBtn} ${tag === 'new' && style.active}`}
					>
						New
					</button>
					<span className={style.bar}></span>
					<button
						onClick={() => setTag('popular')}
						className={`${style.filterBtn} ${
							tag === 'popular' && style.active
						}`}
					>
						Popular
					</button>
					<span className={style.bar}></span>
					<button
						onClick={() => setTag('top')}
						className={`${style.filterBtn} ${tag === 'top' && style.active}`}
					>
						Top
					</button>
				</div>
				<div className={style.coursesCards}>
					{courses
						.filter((course) => filterCourses(course))
						.map((e) => {
							return <CourseCard key={e.id} data={e} />;
						})}
				</div>
			</div>
		</section>
	);
}

export default Courses;
