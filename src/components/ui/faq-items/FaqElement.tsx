import { useState } from 'react';
import style from './style.module.css';
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
function FaqElement({
	data,
}: {
	data: {
		id: number;
		q: string;
		a: string;
	};
}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen((prevOpen) => !prevOpen);
	};
	return (
		<AccordionItem value={data.id.toString()} className={style.accordionItem}>
			<AccordionTrigger onClick={toggleAccordion}>
				{data.q}
				<span className="custom-icon">{!isOpen ? '-' : '+'}</span>
			</AccordionTrigger>
			<AccordionContent>{data.a}</AccordionContent>
		</AccordionItem>
	);
}

export default FaqElement;
