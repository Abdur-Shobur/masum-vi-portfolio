import ContactCardHeading from '../../headings/contact-card-heading';
import style from './education-card.module.css';

function EducationCard() {
	return (
		<div>
			<ContactCardHeading text={'Education'} icon="education" />
			<div className={style.educationWrap}>
				<p className={style.eduDate}>20014-2018</p>
				<p className={style.eduLevel}>B.Sc in CSE</p>
				<p className={style.uName}>The National University of Bangladesh</p>
			</div>
		</div>
	);
}

export default EducationCard;
