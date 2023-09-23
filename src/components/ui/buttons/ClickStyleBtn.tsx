import React, { useState } from 'react';

function ClickStyleBtn({ text }: { text: string }) {
	const [click, setCLick] = useState(false);

	const animateButton = function () {
		setCLick(false);
		setCLick(true);
		setTimeout(function () {
			setCLick(false);
		}, 700);
	};

	const handleClick = () => {
		animateButton();
	};
	return (
		<button
			type="button"
			onClick={handleClick}
			className={`bubbly-button ${click && 'animate'}`}
		>
			{text}
		</button>
	);
}

export default ClickStyleBtn;
