import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Data (props) {
  const [open, setOpen] = useState('dog-facts');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="dog-facts">Dog Facts</AccordionHeader>
          <AccordionBody accordionId="dog-facts" in>
            {props.data.facts && props.data.facts.map((fact, index) => (
              <div key={index}>
                <p>{fact}</p>
              </div>
            ))}
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Data