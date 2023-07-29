import { useRef, useState } from 'react';
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
	const accordionRef = useRef(null);

	const toggleAccordion = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};
	return (
		<AccordionItem
			ref={accordionRef}
			value={data.id.toString()}
			className={`${style.accordionItem} ${
				!isOpen ? style.notActive : style.active
			}`}
		>
			<AccordionTrigger className={style.Question} onClick={toggleAccordion}>
				{data.q}
				<span className={style.icoPlus}>+</span>
				<span className={style.icoMinus}>-</span>
			</AccordionTrigger>
			<AccordionContent className={style.Answer}>{data.a}</AccordionContent>
		</AccordionItem>
	);
}

export default FaqElement;
