import Link from 'next/link';
import style from './style.module.css';
import { navItems2 } from '@/lib/data/data';
import ButtonOutline from '@/components/ui/buttons/ButtonOutline';
import Image from 'next/image';
import { MasumBillahImage } from '@/lib/Icon';

function DesktopNav2() {
	return (
		<nav className={style.desktopNav}>
			<div className={style.logo}>
				<Image alt="logo" src={MasumBillahImage.logo} />
			</div>
			<div className={style.navBox}>
				<div className={style.naves}>
					{navItems2.map((nav) => (
						<Link className={style.nav} key={nav.id} href={nav.path}>
							{nav.nav}
						</Link>
					))}
				</div>
				<div className={style.action}>
					<ButtonOutline text="Hire Me" />
				</div>
			</div>
		</nav>
	);
}

export default DesktopNav2;
