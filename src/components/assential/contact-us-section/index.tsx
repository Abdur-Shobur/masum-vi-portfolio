import style from './style.module.css';

function ContactUsSection() {
	return (
		<div className={`${style.contact_us_6}`}>
			<div
				className={`${style['responsive-container-block']} ${style.container} `}
			>
				<form className={`${style['form-box']}`}>
					<div
						className={`${style['container-block']} ${style['form-wrapper']}`}
					>
						<div className={`${style['mob-text']}`}>
							<p className={`${style['text-blk']} ${style['contactus-head']} `}>
								Get in Touch
							</p>
							<p
								className={`${style['text-blk']} ${style['contactus-subhead']}`}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
								diam lectus sapien.
							</p>
						</div>
						<div
							className={`${style['responsive-container-block']}`}
							id="i2cbk"
						>
							<div
								className={`${style['responsive-cell-block']} ${style['wk-tab-12']} ${style['wk-mobile-12']} ${style['wk-desk-12']} ${style['wk-ipadp-12']} `}
								id="i10mt-3"
							>
								<p className={`${style['text-blk']} ${style['input-title']}`}>
									FIRST NAME
								</p>
								<input
									className={`${style['input']}`}
									id="ijowk-3"
									name="FirstName"
									placeholder="Please enter first name..."
								/>
							</div>
							<div
								className={`${style['responsive-cell-block']}   ${style['wk-tab-12']} ${style['wk-mobile-12']} ${style['wk-desk-12']} ${style['wk-ipadp-12']}`}
								id="ip1yp"
							>
								<p className={`${style['text-blk']} ${style['input-title']}`}>
									EMAIL
								</p>
								<input
									className={style.input}
									id="ipmgh-3"
									name="Email"
									placeholder="Please enter email..."
								/>
							</div>
							<div
								className={`${style['responsive-cell-block']}  ${style['wk-tab-12']} ${style['wk-mobile-12']} ${style['wk-desk-12']} ${style['wk-ipadp-12']}`}
								id="ih9wi"
							>
								<p className={`${style['text-blk']} ${style['input-title']}`}>
									PHONE NUMBER
								</p>
								<input
									className={style.input}
									id="imgis-3"
									name="PhoneNumber"
									placeholder="Please enter phone number..."
								/>
							</div>
							<div
								className={`${style['responsive-cell-block']}  ${style['wk-tab-12']} ${style['wk-mobile-12']} ${style['wk-desk-12']} ${style['wk-ipadp-12']}`}
								id="i634i-3"
							>
								<p className={`${style['text-blk']} ${style['input-title']}`}>
									WHAT DO YOU HAVE IN MIND ?
								</p>
								<textarea
									className={style.textinput}
									id="i5vyy-3"
									placeholder="Please enter query..."
								></textarea>
							</div>
						</div>
						<button
							className={`${style['submit-btn']}`}
							id="w-c-s-bgc_p-1-dm-id-2"
						>
							Submit
						</button>
					</div>
				</form>
				<div
					className={`${style['responsive-cell-block']} ${style['wk-desk-7']}  ${style['wk-ipadp-12']}  ${style['wk-tab-12']} ${style['wk-mobile-12']}`}
					id="i772w"
				>
					<div className={`${style['map-part']}`}>
						<div className={style.right_side_op}>
							<p
								className={`${style['text-blk']} ${style['map-contactus-head']}`}
								id="w-c-s-fc_p-1-dm-id"
							>
								Reach us at
							</p>
							<p
								className={`${style['text-blk']} ${style['map-contactus-subhead']}`}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
								diam lectus sapien.
							</p>
							<div className={`${style['social-media-links']} ${style.mob}`}>
								<a
									className={`${style['social-icon-link']}`}
									href="#"
									id="ix94i-2-2"
								>
									<img
										className={`${style['link-img']} ${style['image-block']}`}
										src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
									/>
								</a>
								<a
									className={`${style['social-icon-link']}`}
									href="#"
									id="itixd"
								>
									<img
										className={`${style['link-img']} ${style['image-block']}`}
										src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
									/>
								</a>
								<a
									className={`${style['social-icon-link']}`}
									href="#"
									id="izxvt"
								>
									<img
										className={`${style['link-img']} ${style['image-block']}`}
										src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
									/>
								</a>
								<a
									className={`${style['social-icon-link']}`}
									href="#"
									id="izldf-2-2"
								>
									<img
										className={`${style['link-img']} ${style['image-block']}`}
										src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
									/>
								</a>
							</div>
						</div>
						<div
							className={`${style['map-box']} ${style['container-block']}`}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUsSection;
