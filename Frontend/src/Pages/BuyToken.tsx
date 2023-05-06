import react from 'react'
import { useState } from "react"
import image from '../assets/image 3.svg'

export const BuyToken = () => {
    return (
        <div className="mt-12 h-full flex items-center justify-center flex-col">
            <div className="container mb-6">
                <div className='row'>
                    <div className='col-6'>
                        <img src={image} />
                    </div>
                    <div className='col-6'>
                        <h1 className="font-roboto font-bold text-white text-5xl">
                            Carbon Coin - Big Farm 
                        </h1>
                        <h2 className="font-roboto text-white text-3xl">
                            Seller: Ambiental Reserve in Mato Grosso
                        </h2>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}