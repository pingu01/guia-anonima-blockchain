import { Plus, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import { Link } from 'react-router-dom';

import logoImage from '../assets/Sem título.png';
import test from '../assets/Group 75.svg'

interface NavbarProps {
  logo: string;
  leaguename: string;
}

export const Navbar = () => {
  return(
    <nav className="w-full max-h-40 flex items-center justify-center flex-wrap">
      <div className="h-28 w-full flex items-center justify-between bg-gray-700">
        <div className="mx-10 flex items-center flex-shrink-0 text-white">
          <Link to={"/"}>
            <img src="../assets/Sem título.png" />
          </Link>
          {/* <span className="font-bold text-4xl">ECHOSEC</span> */}
        </div>
        <div className="gap-16 flex items-center">
          <Link 
            to={"/"} 
            className="font-montserrat block font-medium text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400">
              Home
          </Link>
          <Link 
            to={"/processo-seletivo"}
            className="font-montserrat block font-medium text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400">
              About
          </Link>
          <Link 
            to={"/marketplace"} 
            className="font-montserrat block font-medium text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400">
              Marketplace
          </Link>
          <Link
            to={"/sobre-nos"}
            className="font-montserrat block font-medium text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400">
              Donate
          </Link>
          <Link 
              to={"/sobre-nos"} 
              className="block lg:inline-block lg:mt-0">
            <button className="mr-10 w-40 h-14 font-montserrat font-medium text-lg text-black border-black border-2 bg-orange-400 rounded-2xl flex items-center justify-center hover:text-white">
              Connect to Metamask
            </button>
            </Link>
        </div>
      </div>
      
    </nav>

  )
}