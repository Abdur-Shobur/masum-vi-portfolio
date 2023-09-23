import ButtonIco from '@/components/ui/buttons/ButtonIco';
import style from './style.module.css';
import Icons from '@/lib/Icon';

function GetStart() {
	return (
		<section className="layout">
			<div className={style.getStart}>
				<div className={style.content}>
					<h1 className={style.getStart}>Get Started</h1>
					<p className={style.subTxt}>Let&apos;s do something new with me!</p>
					{/* <button className={style.btnContact}>Contact</button> */}
					<div className="flex justify-center relative z-10">
						<ButtonIco Icon={Icons.Call} text="Contact" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default GetStart;
