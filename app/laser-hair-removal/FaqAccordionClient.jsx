'use client';

import {
  Accordion, AccordionItem, AccordionItemHeading,
  AccordionItemButton, AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function FaqAccordionClient({ items = [] }) {
  if (!Array.isArray(items) || !items.length) return null;
  return (
    <Accordion allowZeroExpanded>
      {items.map((x, i) => (
        <AccordionItem key={i}>
          <AccordionItemHeading>
            <AccordionItemButton>{x.question}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="tips-wrapper">{x.answer}</div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
