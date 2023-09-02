import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function TextAnimation() {
	return (
		<TypeAnimation
			sequence={[
				'Metal-Forex & Equity Trader',
				1000,
				'Teacher',
				2000,
				'Entrepreneur',
				1000,
				() => {
					console.log('Sequence completed');
				},
			]}
			wrapper="span"
			cursor={true}
			repeat={Infinity}
			className="textAnimation"
		/>
	);
}

export default TextAnimation;
