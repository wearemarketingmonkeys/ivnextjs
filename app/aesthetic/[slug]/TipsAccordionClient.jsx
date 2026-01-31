'use client';
import {
  Accordion, AccordionItem, AccordionItemHeading,
  AccordionItemButton, AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function TipsAccordion({ items = [], type = 'tips', treatments = [] }) {
  if (type === 'price') {
    if (!treatments.length) return null;
    return (
      <Accordion allowZeroExpanded className="price-package-accordion">
        {treatments.map((cat, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>{cat.category}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="treatment-services">
                {(cat.services || []).map((s, si) => (
                  <div className="single-treatment-service" key={si}>
                    <span>{s.name}</span>
                    <span>{s.price} AED</span>
                  </div>
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  if (!items.length) return null;
  return (
    <Accordion allowZeroExpanded>
      {items.map((x, i) => (
        <AccordionItem key={i}>
          <AccordionItemHeading>
            <AccordionItemButton>{x.name}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {x.pretext ? <div dangerouslySetInnerHTML={{ __html: x.pretext + "<br/><br/>" }} /> : null}
            <div className="tips-wrapper">
              {(x.tips || []).map((y, yi) => (
                <div className="tips-wrap" key={yi}>
                  {y.icon ? <img src={y.icon} alt={y.alt} /> : null}
                  <p>{y.txt}</p>
                </div>
              ))}
            </div>
            {x.postext ? <div dangerouslySetInnerHTML={{ __html: "<br/>" + x.postext }} /> : null}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
