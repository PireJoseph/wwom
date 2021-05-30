import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder, className }) => (
  <div id={id} className={className + ' items-center flex flex-col lg:flex-row'}>
    <div className="lg:w-1/2">{primarySlot}</div>
    <div className={`w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}>
      {secondarySlot}
    </div>
  </div>
);

export default SplitSection;
