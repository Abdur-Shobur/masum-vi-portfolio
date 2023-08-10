import Link from 'next/link';
import style from './style.module.css';
import Icons from '@/lib/Icon';

export function SocialIcon1() {
	return (
		<Link className={style.ico1} href={'/'}>
			<Icons.Facebook />
		</Link>
	);
}
export function SocialIcon2() {
	return <div>SocialIcon1</div>;
}
