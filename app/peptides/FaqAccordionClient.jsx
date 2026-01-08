'use client';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

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
            <div className="tips-wrapper">
              {/* Answer text */}
              {x.answer && <p>{x.answer}</p>}
              {/* Bullets list (for FAQ #3 and #15) */}
              {Array.isArray(x.bullets) && x.bullets.length > 0 && (
                <ul className="list-disc pl-6 mt-2 space-y-1"     style={{ paddingLeft: '20px' }}>
                  {x.bullets.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              <br/>
              {/* Optional footer line (FAQ #3 has footer) */}
              {x.footer && <p className="mt-2">{x.footer}</p>}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}