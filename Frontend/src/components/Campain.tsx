import React from 'react';
import { useState } from 'react';

interface CampainProps {
  urlImage: string,
  alt: string,
  styleImage: string,
}
import icon1 from '../assets/item1.svg'
import icon2 from '../assets/item2.svg'
import icon3 from '../assets/item3.svg'
import icon4 from '../assets/Frame.svg'


export const Campain: React.FC<CampainProps> = ({ urlImage, alt, styleImage }) => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className="h-full w-[1391px] rounded-[30px] bg-gray-200 mt-8 flex items-start justify-center flex-col">
        <div className="flex items-center">
          <div className="ml-16 mt-16">
            <img src={urlImage} alt={alt} className={styleImage}/>
          </div>
          <div className="flex items-start flex-col justify-normal gap-5">
            <div>
              <h1 className="font-Roboto font-bold text-black text-4xl mb-3 ml-6">Carbon Coin - Big Farm</h1>
              <h6 className="font-Roboto text-black text-xl mb-6 ml-6">Sustainability Zone in Mato Grosso</h6>
            </div>
            <div className="flex items-center justify-center gap-6">
                <div className="ml-16">
                  <img src={icon1}/>
                </div>
                <div>
                  <h6 className="font-Roboto text-base text-black">Total OCO tokens</h6>
                  <p className="font-Roboto text-2xl text-black font-bold">100 OCO</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-6">
                <div className="ml-16">
                  <img src={icon2}/>
                </div>
                <div>
                  <h6 className="font-Roboto text-base text-black">Modality</h6>
                  <p className="font-Roboto text-2xl text-black font-bold">Ambiental Reserve</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-6">
                <div className="ml-16">
                  <img src={icon3}/>
                </div>
                <div>
                  <h6 className="font-Roboto text-base text-black">Minimal buy</h6>
                  <p className="font-Roboto text-2xl text-black font-bold">2 OCO</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-6">
                <div className="ml-16">
                  <img src={icon4}/>
                </div>
                <div>
                  <h6 className="font-Roboto text-base text-black">Purchase deadline</h6>
                  <p className="font-Roboto text-2xl text-black font-bold">02/02/2024</p>
                </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className="text-black flex justify-around">
          <div className="flex justify-end items-center">
            <div className="pb-8">
            <button className="text-black font-Roboto border-2 rounded-3xl ml-16 mt-10 border-black w-36 h-10">Cancel</button>
          </div>
          <div className='ml-[550px] mr-10 mb-5'>
              <label>CryptoCurrency</label>
              <br />
              <input type="text" value={"OCO"} disabled className="border-[1px] border-black"/>
            </div>
            <div className="mb-5 mr-5">
              <label> Total Tokens</label>
              <br />
              <input type="text" className="border-[1px] border-black"/>
            </div>
            <div>
              <button className="bg-green-500 font-Roboto w-36 h-9 border-2 rounded-3xl">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}