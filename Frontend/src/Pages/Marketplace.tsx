import React from "react";
import { useState } from "react";
import * as ContextMenu from '@radix-ui/react-context-menu';

export const Marketplace = () => {
    return (
        <div className="mt-12 h-full flex items-center justify-center flex-col">
            <div className="mb-6">
                <h1 className="font-roboto font-bold text-white text-5xl">
                    Marketplace
                </h1>
            </div>
            <div>
            <div className="">
                   <h1>Carbon Coin - Big Farm</h1>
                   <h2>Seller: Ambiental Reserve in Mato Grosso</h2>
                   <h2>10 BTGDOL / OCO </h2>
                   <p>Description: Two square kilometers of the native latin-american biom "Pantanal".</p>
                    <a href="/buy-token">compra</a>
                </div>
            </div>
        </div>
    )
};