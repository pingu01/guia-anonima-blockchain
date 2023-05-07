import { useState, useEffect } from "react";
import ethereum from '@metamask/detect-provider';


import { Link } from 'react-router-dom';

import logoImage from '../assets/Logo.svg';
import logoWallet from '../assets/metamask-icon.svg';

export const Navbar = () => {

  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
  const [account, setAccount] = useState<string | null>(null)

  useEffect(() => {
    if((window as any).ethereum){
      setIsMetamaskInstalled(true)
    }
  })
  async function connectWallet(): Promise<void> {
    (window as any).ethereum
    .request({
      method:"eth_requestAccounts",
    })
    .then((accounts : string[]) => {
      setAccount(accounts[0]);
      console.log(accounts[0]);
    })
    .catch((error: any) => {
      alert(`Something went wrong: ${error}`)
    })
  }

  return(
    <nav className="w-full max-h-40 flex items-center justify-center flex-wrap">
      <div className="h-28 w-full flex items-center justify-between bg-navbar">
        <div className="mx-10 flex items-center flex-shrink-0">
          <Link to={"/"} className="flex items-center">
            <img src={logoImage} className="w-24 h-24"/>
            <span className="font-semibold font-Roboto pl-4 text-3xl">NatCrowd</span>
          </Link>
        </div>
        <div className="gap-16 flex items-center">
          <Link 
            to={"/"}
            className="font-Roboto block font-medium text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400">
              Home
          </Link>
          <Link 
            to={"/about"}
            className="font-Roboto block font-medium text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400">
              About
          </Link>
          <Link 
            to={"/campaigns"}
            className="font-Roboto block font-medium text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400">
             Campaigns
          </Link>
          <Link 
              to={"/buy"} 
              className="font-Roboto block font-medium text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400">
              Buy
          </Link>
            {/* {isMetamaskInstalled ? (
              <button 
                className="mr-10 w-40 h-14 font-Roboto font-medium text-lg text-white border-black border-2 bg-orange-400 rounded-2xl flex items-center justify-center hover:text-white"
                onClick={connectWallet}>
                Connected

              </button>
            ) :  */}
            <button 
              className="mr-10 w-80 h-14 px-8 font-Roboto font-medium text-lg text-white border-black border-2 bg-orange-400 rounded-2xl flex items-center justify-between hover:text-white"
              onClick={connectWallet}>
                <img src={logoWallet} className="w-16 pr-4" alt="" />
                <p className="font-Roboto text-lg">Connect to Metamask</p>
            </button>
            {/* } */}
        </div>
      </div>
      
    </nav>

  )
}