'use client';

import {
  Accordion, AccordionItem, AccordionItemHeading,
  AccordionItemButton, AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function PriceAccordionClient({ treatments = [] }) {
  if (!Array.isArray(treatments) || !treatments.length) return null;
  return (
    <Accordion allowZeroExpanded className="price-package-accordion">
      {treatments.map((x, i) => (
        <AccordionItem key={i}>
          <AccordionItemHeading>
            <AccordionItemButton>{x.category}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="treatment-services">
              <div className="single-treatment-service area-description" style={{ marginBottom: 10, fontStyle: 'italic' }}>
                <span>{x.areas}</span>
              </div>
              {x.services?.map((y, j) => (
                <div className="single-treatment-service" key={j}>
                  <span>{y.name}</span>
                  <span>{y.price} AED</span>
                </div>
              ))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
