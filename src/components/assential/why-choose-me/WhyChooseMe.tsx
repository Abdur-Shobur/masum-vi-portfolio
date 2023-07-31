import Header from '@/components/ui/header/Header';
import style from './style.module.css';
import Image from 'next/image';
import { MasumBillahImage } from '@/lib/Icon';
import Button from '@/components/ui/buttons/Button';
import ButtonOutline from '@/components/ui/buttons/ButtonOutline';

function WhyChooseMe() {
	return (
		<section className={style.chooseMe}>
			<div className={style.__left}>
				<Header
					section="Why Choose Me"
					tittle={{
						t1: 'What are the benefits of choosing my ',
						t2: 'services?',
					}}
				/>
				<p className={style.paragraph}>
					An entrepreneur at heart, I proudly founded Sindabad IT Ltd. in 2018—a
					cutting-edge Digital IT agency that has rapidly become an industry
					leader. Our comprehensive suite of services encompasses captivating
					graphics design, state-of-the-art web development, and result-oriented
					digital marketing solutions.
				</p>
				<p className={style.paragraph}>
					With a fusion of artistic creativity and technical brilliance, we
					deliver visually stunning designs, user-friendly websites, and
					data-driven strategies that captivate audiences and leave a lasting
					impact.
				</p>
				<div className={style.buttonBox}>
					<Button text="Hire Me" />
					<ButtonOutline text="Learn More" />
				</div>
			</div>
			<div className={style.__right}>
				<Image alt="masum vai" src={MasumBillahImage.MasumBillah} />
			</div>
		</section>
	);
}

export default WhyChooseMe;
