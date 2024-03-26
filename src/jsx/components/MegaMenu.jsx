import React from 'react';

const megaMenu = (name) => {
  let output;
  switch (name) {
    case 'About »':
      output = <div className="p-3"><h2>Content</h2></div>;
      break;
    default:
      output = <div />;
      break;
  }
  return output;
};

export default megaMenu;
