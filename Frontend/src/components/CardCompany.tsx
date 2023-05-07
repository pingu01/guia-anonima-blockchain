import React from 'react';

interface CardCompanyProps {
  urlImage: string,
  alt: string,
  iconCampaigns: string,
  urlLink: string,
  style: string
}

export const CardCompany:  React.FC<CardCompanyProps>  = ({ urlImage, alt, urlLink, iconCampaigns, style }) => {
  return (
    <div className="w-[1100px] h-72 bg-gray-300 rounded-[30px] flex items-center justify-center mb-6">
      <a href={urlLink}><img src={urlImage} alt={alt} className={style}/></a>
    </div>
  )
}