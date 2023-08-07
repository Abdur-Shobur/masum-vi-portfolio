import Icons from '@/lib/Icon';
import style from './search.module.css';

function SearchBox() {
	return (
		<div>
			<form action="">
				<div className={style.searchBox}>
					<input
						className={style.inSearch}
						type="search"
						placeholder="Search anything"
					/>
					<button type="submit" className={style.inSearchBtn}>
						<Icons.search className={style.ico} />
					</button>
				</div>
			</form>
		</div>
	);
}

export default SearchBox;
