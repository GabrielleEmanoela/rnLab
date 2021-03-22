import React from 'react';
import SonComponent from './SonComponent';

export default (props) => {
  let x = 13;
  let y = 500;
  return (
    <>
      <SonComponent A={x} B={y} />
      <SonComponent A={x + 100} B={y + 200} />
    </>
  );
};
