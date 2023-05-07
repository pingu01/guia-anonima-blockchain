import React from 'react';
import { useState } from 'react';

import imgCredit from '../assets/Creditos-de-carbono-removebg-preview 1.svg'

export const BuyPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className="w-[1100px] flex items-center justify-center flex-col">
        <div className="mt-14 w-64">
          <span className="text-black font-bold text-5xl border-b-4 border-green-500 pb-6">CarbonCoin</span>
        </div>
        <div className="mt-16">
          <p className="text-black font-Roboto text-2xl">
            CarbonCoin is a decentralized digital currency that operates on a secure blockchain network. It's designed to be a carbon offset coin, meaning that its value is backed by carbon credits. This makes it a unique and innovative store of value, as it promotes sustainability and environmental responsibility.</p>
        </div>
        <div className="text-black text-2xl font-Roboto mt-14">
          <p>One key feature of CarbonCoin is its built-in carbon credit marketplace, which allows users to buy and sell carbon credits directly on the blockchain. This creates a transparent and efficient market for carbon credits, which can help to incentivize companies and individuals to reduce their carbon footprint.</p>
        </div>
        <div className="mt-6">
          <img src={imgCredit} alt="Creditos de carbono" />
        </div>
      </div>
    </div>
  )
}