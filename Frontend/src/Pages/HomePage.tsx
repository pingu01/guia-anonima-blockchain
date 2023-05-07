import React from 'react';
import { useState } from 'react';

import img from '../assets/Group 5.svg'
import logoNatura from '../assets/natura.jpg'
import logoNestle from '../assets/Nestle-Logo.png'
import logoBTG from '../assets/image 7.png'

import iconRecycle from '../assets/Recycle.svg'
import iconAmbientalReserve from '../assets/Ambiental reserve.svg'
import iconWater from '../assets/Water.svg'

import { CardCompany } from '../components/CardCompany';

export const HomePage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className="w-full relative">
        <img src={img} className="w-full h-auto"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-5xl border-b-4 border-green-500 pb-9">CarbonCoin</span>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="text-black font-Roboto font-normal text-3xl mt-10">
          <h3>Welcome to CarbonCoin, the token representation of carbon credits on the blockchain network.</h3>
        </div>
        <div className="text-black font-Roboto text-3xl font-bold mt-10 flex items-center justify-center w-full">
          <h1 className="mb-10">Top 3 companies that most have CarbonCoin’s</h1>
        </div>
        <CardCompany urlImage={logoNatura} alt={'Logo Natura'} iconCampaigns={''} urlLink={'https://www.natura.com.br/'} style='w-64'/>
        <CardCompany urlImage={logoNestle} alt={'Logo Nestle'} iconCampaigns={''} urlLink={'https://www.nestle.com/'} style='w-64'/>
        <CardCompany urlImage={logoBTG} alt={'Logo BTG'} iconCampaigns={''} urlLink={'https://www.btgpactual.com/'} style='w-80'/>
      </div>

    </div>
  )
}