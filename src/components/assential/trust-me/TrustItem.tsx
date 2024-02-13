import Image from 'next/image';
import React from 'react';
import companyImg from './image/company-image.webp';

function TrustItem() {
	return (
		<div className="relative border-main border rounded-xl shadow-xl my-10 hover:shadow-none transition-all cursor-move">
			<Image
				className="w-40 h-28 object-contain"
				alt="Name Of Company"
				src={companyImg}
			/>
			<p className="text-main bg-main text-white absolute -bottom-2 shadow rounded left-1/2 -translate-x-1/2 whitespace-nowrap px-3 text-sm">
				Name of Company
			</p>
		</div>
	);
}

export default TrustItem;
