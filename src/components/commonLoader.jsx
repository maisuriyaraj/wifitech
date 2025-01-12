import React from 'react';
import { BounceLoader } from 'react-spinners';

export default function CommonLoader() {
  return (
    <div className="loader-div">
      <BounceLoader color="#009de2" />
    </div>
  );
}
