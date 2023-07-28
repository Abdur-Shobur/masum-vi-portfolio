import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import Icons from '@/libs/Icon';
import Link from 'next/link';
function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style['footer-content']}>
				<div className={style['owner-info']}>
					<div className="flex items-center gap-3">
						<Image src={Icons.logoDark} alt="logo" />
						<h1 className={style['owner-name']}>md masum billah</h1>
					</div>
					<div className={style['icon-box']}>
						<Link className={style['icon']} href={'/'} target="_blank" passHref>
							<Icons.Facebook />
						</Link>
						<Link className={style['icon']} href={'/'} target="_blank" passHref>
							<Icons.Linkedin />
						</Link>
						<Link className={style['icon']} href={'/'} target="_blank" passHref>
							<Icons.Instagram />
						</Link>
						<Link className={style['icon']} href={'/'} target="_blank" passHref>
							<Icons.Twitter />
						</Link>
					</div>
					<p className={style['owner-area-txt']}>
						PixProw is your ultimate gaming destination, where pixelated
						adventures come to life!
					</p>
				</div>
				<div className={style['pages']}>
					<h4 className={style.heading}>Gatting Started</h4>
					<div className={style.links}>
						<Link className={style['link-route']} href={'/'}>
							Home
						</Link>
						<Link className={style['link-route']} href={'/'}>
							About Us
						</Link>
						<Link className={style['link-route']} href={'/'}>
							Services
						</Link>
						<Link className={style['link-route']} href={'/'}>
							Blog
						</Link>
						<Link className={style['link-route']} href={'/'}>
							Contact
						</Link>
					</div>
				</div>
				<div className={style['resources']}>
					<h4 className={style.heading}>Resources</h4>
					<div className={style.links}>
						<Link className={style['link-route']} href={'/'}>
							Video Tutorial
						</Link>
						<Link className={style['link-route']} href={'/'}>
							Term & Service
						</Link>
						<Link className={style['link-route']} href={'/'}>
							Privacy policy
						</Link>
						<Link className={style['link-route']} href={'/'}>
							Sitemap
						</Link>
					</div>
				</div>
				<div className={style['news-latter']}>
					<h4 className={style.heading}>NewsLetter</h4>
					<p className={style['news-latter-txt']}>
						Subscribe to our newsletter to receive special offers, creative
						projects, and much more!
					</p>
					<div>
						<form className="flex" action="#">
							<input
								placeholder="Your Email Address"
								type="text"
								className={style['join-tel-input']}
							/>
							<button className={style['join-tel-btn']} type="submit">
								<Icons.Telegram />
							</button>
						</form>
					</div>
				</div>
			</div>

			<p className={style['footer-copyright']}>
				© 2023 Md Masum Billah. All right reserved
			</p>
		</footer>
	);
}

export default Footer;
