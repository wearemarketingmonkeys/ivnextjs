// app/iv-therapy/drips/[slug]/FaqAccordionClient.jsx
'use client';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; // or your custom CSS

export default function FaqAccordion({ items = [] }) {
  if (!items.length) return null;

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
