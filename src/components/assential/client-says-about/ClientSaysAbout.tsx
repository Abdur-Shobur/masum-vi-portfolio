import Header from '@/components/ui/header/Header';
import React from 'react';

function ClientSaysAbout() {
	return (
		<section className="layout">
			<Header
				section="Clients Opinions"
				tittle={{
					t1: 'The Clients Says About My',
					t2: 'SEO Service',
				}}
			/>
			<div className="my-10 flex gap-3 md:flex-row flex-col">
				<div className="flex-1">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/K87aFjB7Ff0?si=_P3qG6kWDLuGrCRj"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="flex-1">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/K87aFjB7Ff0?si=_P3qG6kWDLuGrCRj"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</section>
	);
}

export default ClientSaysAbout;
