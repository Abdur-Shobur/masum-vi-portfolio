import MainHead from '@/components/assential/MainHead';
import Icons, { Bg } from '@/lib/Icon';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import style from './blogDetails.module.css';
import ProfileInfoAndShare from '@/components/ui/cards/profile-card-with-social';
import { Quotations1 } from '@/components/ui/paragraph';
import ArticleCard from '@/components/ui/cards/article-card';
import LayoutTwo from '@/components/layout/LayoutTwo';
function Blogs() {
	return (
		<div className="layout">
			<MainHead section="Poetry" tittle={{ t1: 'Ei', t2: ' Shohor' }} />
			<div className="">
				<Image
					className={style.bannerImg}
					alt="marketing img"
					src={Bg.MarketingImg}
				/>
			</div>
			<div className={style.detailsContentWrap}>
				<ProfileInfoAndShare />
				<div className={style.detailsTxtWrap}>
					<p className={style.detailsTxt}>
						Web design is a vital component of establishing a strong online
						presence and effectively engaging with your target audience. To
						create a successful website, it is essential to understand and
						implement key web design essentials. These elements not only enhance
						the visual appeal of your website but also improve usability,
						functionality, and user experience. In this article, we will explore
						the essential elements that every web designer should consider when
						creating a website.
					</p>
					<p className={style.detailsTxt}>
						Web design is a vital component of establishing a strong online
						presence and effectively engaging with your target audience. To
						create a successful website, it is essential to understand and
						implement key web design essentials. These elements not only enhance
						the visual appeal of your website but also improve usability,
						functionality, and user experience. In this article, we will explore
						the essential elements that every web designer should consider when
						creating a website.
					</p>
					<p className={style.detailsTxt}>
						Web design is a vital component of establishing a strong online
						presence and effectively engaging with your target audience. To
						create a successful website, it is essential to understand and
						implement key web design essentials. These elements not only enhance
						the visual appeal of your website but also improve usability,
						functionality, and user experience. In this article, we will explore
						the essential elements that every web designer should consider when
						creating a website.
					</p>
					<p className={style.detailsTxt}>
						Web design is a vital component of establishing a strong online
						presence and effectively engaging with your target audience. To
						create a successful website, it is essential to understand and
						implement key web design essentials. These elements not only enhance
						the visual appeal of your website but also improve usability,
						functionality, and user experience. In this article, we will explore
						the essential elements that every web designer should consider when
						creating a website.
					</p>
					<Quotations1 txt="Web design essentials are the building blocks of creating a successful online presence. From clear and intuitive navigation to responsive design, compelling visuals, and user-friendly forms, these elements work together to enhance the user experience and engage visitors." />
				</div>
			</div>
			<div className={style.relatedArtBox}>
				<div className={style.titleBox}>
					<h1 className={style.relatedTxt}>Related articles</h1>
					<div className={style.arrowBox}>
						<span className={style.icoBox}>
							<Icons.LeftAAngle className={style.icoLR} />
						</span>
						<span className={style.icoBox}>
							<Icons.RightAngle className={style.icoLR} />
						</span>
					</div>
				</div>

				<div className={style.relatedPosts}>
					<ArticleCard />
					<ArticleCard />
				</div>
			</div>
		</div>
	);
}

export default Blogs;
Blogs.getLayout = function getLayout(page: ReactElement) {
	return <LayoutTwo>{page}</LayoutTwo>;
};
