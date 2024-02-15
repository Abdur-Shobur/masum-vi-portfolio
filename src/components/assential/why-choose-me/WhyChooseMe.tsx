import Header from '@/components/ui/header/Header';
import style from './style.module.css';
import Image from 'next/image';
import Icons, { BGShape, MasumBillahImage } from '@/lib/Icon';
import ButtonIco from '@/components/ui/buttons/ButtonIco';
import ClickStyleBtn from '@/components/ui/buttons/ClickStyleBtn';
function WhyChooseMe() {
	return (
		<section className={style.chooseMe_wrap}>
			<div className={style.chooseMe}>
				<div className={style.__left}>
					<Header
						section="Why Choose Me"
						tittle={{
							t1: 'What are the benefits of choosing my ',
							t2: 'services?',
						}}
					/>
					<p className={style.paragraph}>
						An entrepreneur at heart, I proudly founded Sindabad IT Ltd. in
						2018—a cutting-edge Digital IT agency that has rapidly become an
						industry leader. Our comprehensive suite of services encompasses
						captivating graphics design, state-of-the-art web development, and
						result-oriented digital marketing solutions.
					</p>
					<p className={style.paragraph}>
						With a fusion of artistic creativity and technical brilliance, we
						deliver visually stunning designs, user-friendly websites, and
						data-driven strategies that captivate audiences and leave a lasting
						impact.
					</p>
					<div className={style.buttonBox}>
						<ButtonIco Icon={Icons.Call} text="Hire Me" />
						{/* <ButtonOutline text="Learn More" /> */}
						<ClickStyleBtn text="Learn More" />
					</div>
				</div>
				<div className={style.__right}>
					<Image
						className={style.bgWithSHape}
						alt="masum vai"
						src={MasumBillahImage.bgWithShape2}
					/>
					<div style={{ bottom: '0', right: '0' }} className="colorBox-2"></div>
				</div>
			</div>
			<div className={style.shape3_div}>
				<Image className={style.shape3} alt="masum vai" src={BGShape.shape3} />
			</div>
		</section>
	);
}

export default WhyChooseMe;
