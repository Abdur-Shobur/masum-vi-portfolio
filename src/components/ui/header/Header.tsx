import style from './style.module.css';

function Header({
	section,
	tittle,
}: {
	section: string;
	tittle: {
		t1: string;
		t2: string;
		t3?: string;
	};
}) {
	return (
		<div>
			<div className={style.headerBox}>
				<span className={style.line}></span>
				<h4 className={style.section}>{section}</h4>
			</div>
			<h1 className={style.tittle}>
				<span className={style.t1}>{tittle.t1}</span>
				<span className={style.t2}>{tittle.t2}</span>
				<span className={style.t1}>{tittle.t3}</span>
			</h1>
		</div>
	);
}

export default Header;
