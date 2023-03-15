import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

// This Code is a ReactStrap Component called Toast. 


function Toast(props, args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Click Me For Dog Fact
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
            {/* Below the code is rendering a list of facts by mapping through an array of facts stored in the props.data.facts object. 
            The && operator ensures that the map function only executes if props.data.facts is truthy (i.e., not null or undefined) */}
          {props.data.facts && props.data.facts.map((fact, index) => (
              <div key={index}>
                <h2>{fact}</h2>
              </div>
            ))}
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default Toast;