import React from 'react';

function BgSvgShape() {
	return (
		<svg
			id="sw-js-blob-svg"
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
		>
			<defs>
				<linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
					<stop
						id="stop1"
						stop-color="rgba(248, 117, 55, 1)"
						offset="0%"
					></stop>
					<stop
						id="stop2"
						stop-color="rgba(251, 168, 31, 1)"
						offset="100%"
					></stop>
				</linearGradient>
			</defs>
			<path
				fill="url(#sw-gradient)"
				d="M21.3,-36C28.2,-32.9,34.9,-28.4,38.8,-22.2C42.7,-16,43.9,-8,43.3,-0.4C42.6,7.2,40,14.4,36,20.6C32.1,26.7,26.7,31.8,20.4,34.6C14.2,37.5,7.1,38.2,0.4,37.6C-6.4,37,-12.8,35.1,-19.1,32.2C-25.4,29.4,-31.6,25.6,-36.3,20.1C-41,14.5,-44.3,7.3,-43.5,0.4C-42.8,-6.4,-38,-12.8,-33.7,-19C-29.3,-25.2,-25.4,-31.2,-19.9,-35.1C-14.3,-39,-7.2,-40.8,0,-40.8C7.2,-40.8,14.4,-39.1,21.3,-36Z"
				width="100%"
				height="100%"
				transform="translate(50 50)"
				stroke-width="0"
				style={{ transition: 'all 0.3s ease 0s' }}
			></path>
		</svg>
	);
}

export default BgSvgShape;
