import { Plus, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import { Link } from 'react-router-dom';


import logoImage from '../assets/Logo_Echosec.svg';
import test from '../assets/Group 75.svg'

interface NavbarProps {
  logo: string;
  leaguename: string;
}

export const Navbar = () => {
  return(
    <nav className="w-full max-h-40 flex items-center justify-center flex-wrap">
      <div className="mr-8 ml-8 h-28 w-full flex items-center justify-between text-white border-b-2">
        <div className="flex items-center flex-shrink-0 text-white">
          <Link to={"/"}>
            <img src={test} className="w-52 h-20" alt="Logo Echosec" />
          </Link>
          {/* <span className="font-bold text-4xl">ECHOSEC</span> */}
        </div>
        <div className="gap-16 flex items-center">
          <Link 
            to={"/"} 
            className="font-montserrat block font-medium text-lg lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
              Home
          </Link>
          <Link 
            to={"/processo-seletivo"}
            className="font-montserrat block font-medium text-lg lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
              Processo seletivo
          </Link>
          <Link 
            to={"/sobre-nos"} 
            className="font-montserrat block font-medium text-lg lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
              Sobre nós
          </Link>
          <Link 
              to={"/sobre-nos"} 
              className="block lg:inline-block lg:mt-0">
            <button className="w-40 h-14 font-montserrat font-medium text-lg text-gray-300 border-gray-300 border-2 rounded-2xl flex items-center justify-center hover:border-white hover:text-white">
              Inscreva-se
            </button>
            </Link>
        </div>
      </div>
      
    </nav>

  )
}