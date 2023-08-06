import ContactCardHeading from '../../headings/contact-card-heading';
import style from './skills-card.module.css';

function SkillsCard() {
	// dummy data

	const data = [
		{
			id: 1,
			skill: 'Bangla',
			value: 100,
		},
		{
			id: 2,
			skill: 'English',
			value: 70,
		},
		{
			id: 3,
			skill: 'Urdu',
			value: 50,
		},
		{
			id: 4,
			skill: 'Hindi',
			value: 60,
		},
	];
	const progressValue = 100;

	return (
		<div className="light">
			<ContactCardHeading text="Language" icon="language" />

			{data?.map((e) => (
				<div key={e.id} className={style.progressbarWrap}>
					<p className={style.title}>{e.skill}</p>

					<div className="flex w-full h-2 bg-[#16877766] rounded-full overflow-hidden ">
						<div
							className="flex flex-col justify-center overflow-hidden bg-[#168777]"
							role="progressbar"
							style={{ width: `${e.value}%` }}
							aria-valuenow={progressValue}
							aria-valuemin={0}
							aria-valuemax={100}
						></div>
					</div>
				</div>
			))}
		</div>
	);
}

export default SkillsCard;
