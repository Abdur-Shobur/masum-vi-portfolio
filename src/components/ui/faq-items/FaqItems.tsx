import { useState } from 'react';

const AccordionItem = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<div className="collapse collapse-arrow join-item border border-base-300">
			<input type="radio" name="my-accordion-4" checked={isOpen} />
			<div
				className="collapse-title text-xl font-medium"
				onClick={toggleAccordion}
			>
				{title}
			</div>
			{isOpen && <div className="collapse-content">{content}</div>}
		</div>
	);
};

export default AccordionItem;
