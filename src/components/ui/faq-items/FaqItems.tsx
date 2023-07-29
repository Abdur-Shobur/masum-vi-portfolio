import { useState } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import FaqElement from './FaqElement';
import { faqData } from '@/lib/data/data';
// dummy text

export function AccordionDemo() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen((prevOpen) => !prevOpen);
	};

	return (
		<Accordion
			type="single"
			collapsible
			defaultValue="item-2"
			className="w-full"
		>
			{faqData?.map((e) => (
				<FaqElement data={e} key={e.id} />
			))}
		</Accordion>
	);
}
