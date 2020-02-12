import React from 'react';

function Row({ label, children }) {
  return (
    <div className="flex items-center">
      <div className="col-4 line-height-1 right-align pr2 imperceptible">{label}</div>
      <div className="col-8">{children}</div>
    </div>
  );
}

export default Row;
