import React from 'react';
import PeoplesUser from './PeoplesUser';
import { Wrapper } from './PeoplesStyle';
import PeoplesHeader from './PeoplesHeader';

function PeoplesPage() {
  return (
    <Wrapper>
      <PeoplesHeader />
      <div className="peoples">
        <PeoplesUser />
        <PeoplesUser />
        <PeoplesUser />
        <PeoplesUser />
        <PeoplesUser />
        <PeoplesUser />
      </div>
    </Wrapper>
  );
}

export default PeoplesPage;
