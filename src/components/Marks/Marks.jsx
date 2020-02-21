import React from 'react';
import styled from 'styled-components';
import { styles } from '../ThemeProvider/Styles';

export const MarkItem = styled.div`
  padding: 2px 10px;
  margin: 3px;
  border-radius: ${styles.borderRadius};
  opacity: 0.8;
  background-color: ${styles.isDark ? '#676767' : '#ececec'};
  white-space: nowrap;
  font-size: 12px;
  text-transform: lowercase;
  font-style: italic;
`;

function Marks({ data, className = '', style }) {
  return (
    <div className={`flex flex-wrap ${className}`} style={style}>
      {data && data.map(mark => <MarkItem key={mark} children={mark} />)}
    </div>
  );
}

export default Marks;
