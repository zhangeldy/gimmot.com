import React from 'react';
import PeoplesUser from './PeoplesUser';
import { Wrapper } from './PeoplesStyle'

function PeoplesPage(props) {
  return (
    <Wrapper className="mt2">
      <PeoplesUser />
      <PeoplesUser />
      <PeoplesUser />
      <PeoplesUser />
      <PeoplesUser />
      <PeoplesUser />
    </Wrapper>
  );
}

export default PeoplesPage;
