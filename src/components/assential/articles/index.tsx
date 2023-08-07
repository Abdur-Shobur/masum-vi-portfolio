import ArticleCard from '@/components/ui/cards/article-card';
import style from './articles.module.css';

function Articles() {
	return (
		<section>
			<div className="layout">
				<div className={style.filter}>
					<h1 className={style.tittle}>Latest articles</h1>
					<div className={style.filterBox}>
						<button className={style.btn}>Digital Marketing </button>
						<button className={style.btn}>Graphic Designing</button>
						<button className={style.btn}>Freelance Treding</button>
						<button className={`${style.btn} ${style.active}`}>All</button>
					</div>
				</div>

				<div className={style.cards}>
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
				</div>
			</div>
		</section>
	);
}

export default Articles;
