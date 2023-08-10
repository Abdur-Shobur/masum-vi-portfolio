import style from './style.module.css';

export function Paragraph1() {
	return <div>Paragraph1</div>;
}

export function Quotations1({ txt }: { txt: string }) {
	return <p className={style.quotations1}>{txt}</p>;
}
