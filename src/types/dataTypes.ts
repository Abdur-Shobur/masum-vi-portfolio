export interface ICoursesData {
	id: number;
	img: any;
	category: string;
	name: string;
	enroll: string;
	review: string;
	tags: string[];
	star: string;
	prePrice: string;
	curPrice: string;
}

export interface ICount {
	id: number;
	value: number;
	title: string;
	suffix: string;
}
export interface IService {
	id: number;
	icon: any;
	title: string;
	subText: string;
}
