import React from 'react';
import { useState } from 'react';

import { Campain } from '../components/Campain';

import campaign1 from '../assets/image 3.svg'
import campaign2 from '../assets/jonatan-pie-OPOg0fz5uIs-unsplash 1 (1).svg'
import campaign3 from '../assets/noah-buscher-x8ZStukS2PM-unsplash 1.svg'

export const CampainPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <Campain urlImage={campaign1} alt={''} styleImage={''} />
      <Campain urlImage={campaign2} alt={''} styleImage={''} />
      <Campain urlImage={campaign3} alt={''} styleImage={''} />
    </div>
  )
}