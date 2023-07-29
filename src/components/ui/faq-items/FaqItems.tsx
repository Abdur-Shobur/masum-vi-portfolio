import { Accordion } from '@/components/ui/accordion';
import FaqElement from './FaqElement';
import { faqData } from '@/lib/data/data';
// dummy text

export function AccordionDemo() {
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
