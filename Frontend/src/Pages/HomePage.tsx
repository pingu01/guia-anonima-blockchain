import React from 'react';
import { useState } from 'react';

export const HomePage = () => {
  return (
    <div className="mt-12 h-full flex items-center justify-center flex-col">
      <div className="mb-6">
        <h1 className="font-poppins font-bold text-white text-5xl">
          FALTAM
        </h1>
      </div>
      <div className="w-full flex items-center justify-center mb-7">
        <div className="flex items-center justify-center mb-7">
        </div>
        <div className="flex justify-center flex-col gap-y-4">

        </div>
      </div>
      <div className="">
        <div className="flex justify-center font-poppins font-bold text-white text-4xl">
          <h2>PARA O PROCESSO SELETIVO</h2>
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col">
        <p className="font-montserrat font-medium text-sm text-white">Saiba mais</p>
        <button className="w-6 h-9 border-white border-2 rounded-2xl">|</button>
      </div>
    </div>
  )
}