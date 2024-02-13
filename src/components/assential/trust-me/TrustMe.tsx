import Image from 'next/image';
import companyImg from './image/company-image.webp';
import style from './style.module.css';

function TrustMe() {
	return (
		<section>
			<h1 className={style.sectionTitle}>
				PROUDLY DISPLAYING MY TRUSTED CLIENTELE: LEADING BRANDS WHO TRUST ME!
			</h1>

			{/* slider  */}
			<div className="">
				<div className="">
					<Image alt="Name Of Company" src={companyImg} />
					<p className="text-main">Name of Company</p>
				</div>
			</div>
		</section>
	);
}

export default TrustMe;
