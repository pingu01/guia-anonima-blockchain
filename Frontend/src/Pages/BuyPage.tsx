import React from 'react';
import { useState } from 'react';

import img1 from "../assets/1.svg"
import img2 from "../assets/2.svg"
import img3 from "../assets/3.svg"
import img4 from "../assets/4.svg" 
import img5 from "../assets/5.svg"
import img6 from "../assets/6.svg"
import img7 from "../assets/7.svg"
import img8 from "../assets/8.svg"
import img9 from "../assets/9.svg"

export const BuyPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className=" flex items-center justify-center flex-col">
        <div className="mt-14 mb-9">
          <h1 className="text-black font-bold text-5xl pb-4">CarbonCoin X BTGDOL</h1>
        </div>
        <h4 className="text-black font-Roboto text-3xl pb-5 pt-5">Fist Step: <a href="https://app.uniswap.org/#/swap">https://app.uniswap.org/#/swap</a></h4>
        <h4 className="text-black font-Roboto text-3xl pb-5 pt-5">Second Step: Switch network to polygon network.</h4>
        <img src={img1} />
        <h4 className="text-black font-Roboto text-3xl pb-5 pt-5">Third Step: Connect metamask.</h4>
        <img src={img2}/>
        <h4 className="text-black font-Roboto text-3xl pb-5 pt-5">Fourth Step: Select the BTGUSD token.</h4>
        <img src={img3}/>
        <img src={img4}/>
        <h4 className="text-black font-Roboto text-3xl pb-5 pt-5">Contract address BTGUSD: </h4>
        <h4 className="text-black font-Roboto text-3xl pb-5 pt-5">0x0172ae13E3583BF565957095D27caede3Abb172e</h4>
        <img src={img5}/>
        <h4 className="text-black font-Roboto text-3xl pb-5 pt-5">Fifth Step: Select the CarbonCoin.</h4>
        <img src={img6}/>
        <img src={img7}/>
        <h4 className="text-black font-Roboto text-3xl pb-5 pt-5">Contract address CarbonCoin(OCO): </h4>
        <h4 className="text-black font-Roboto text-3xl pb-5 pt-5">0x905E8Af8542C208c67f80FA5331363b47578F42D</h4>
        <img src={img8}/>
        <h4 className="text-black font-Roboto text-3xl mb-5 pt-5">Sixth Step: Ready to swap.</h4>
        <img src={img9} className="mb-10"/>
      </div>
    </div>
  )
}