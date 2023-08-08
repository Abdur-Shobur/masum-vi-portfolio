import Icons from '@/lib/Icon';
import style from './pagination.module.css';

function Pagination() {
	return (
		<div className={style.wrap}>
			<button className={style.nxtBtn}>
				<Icons.LeftArrow className={style.ico} />{' '}
				<span className={style.nxtBtnTxt}>Previous</span>
			</button>
			<div className={style.pageBtnGroup}>
				<button className={`${style.pageBtn} ${style.active}`}>1</button>
				<button className={style.pageBtn}>2</button>
				<button className={style.pageBtn}>3</button>
				<button className={style.pageBtn}>
					<Icons.ThreeDots className={style.ico} />
				</button>
				<button className={style.pageBtn}>7</button>
				<button className={style.pageBtn}>8</button>
				<button className={style.pageBtn}>9</button>
			</div>
			<button className={style.nxtBtn}>
				<span className={style.nxtBtnTxt}>Next</span>
				<Icons.RightArrow className={style.ico} />
			</button>
		</div>
	);
}

export default Pagination;
