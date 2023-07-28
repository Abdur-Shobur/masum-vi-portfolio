import Button from '@/components/ui/buttons/Button';
import React from 'react';
import style from './style.module.css';
function ProjectInMind() {
	return (
		<section className={style['mind-section']}>
			<div className={style['wrap']}>
				<h1 className={`${style.heading}`}>Got a project in mind?</h1>
				<p className={`${style['sub-heading']}`}>
					Design is a fascinating realm that captivates me. I find joy in the
					process of creating visually appealing and functional designs that
					bring beauty to the world.
				</p>
				<div className="flex justify-center">
					<Button text="Let’s work together" icon={true} />
				</div>
			</div>
		</section>
	);
}

export default ProjectInMind;
