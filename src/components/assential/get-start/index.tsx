import style from './style.module.css';

function GetStart() {
	return (
		<section className="layout">
			<div className={style.getStart}>
				<div className={style.content}>
					<h1 className={style.getStart}>Get Started</h1>
					<p className={style.subTxt}>Let&apos;s do something new with me!</p>
					<button className={style.btnContact}>Contact</button>
				</div>
			</div>
		</section>
	);
}

export default GetStart;
