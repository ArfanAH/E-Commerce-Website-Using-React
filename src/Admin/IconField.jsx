import React from 'react'
import { FaTag, FaDollarSign, FaInfoCircle, FaList, FaIndustry,FaWarehouse } from 'react-icons/fa';
import { FcRating } from "react-icons/fc";
import { GiReturnArrow } from "react-icons/gi";
import { FaShieldAlt } from 'react-icons/fa';


const iconMap = {
  FaTag: <FaTag />,
  FaDollarSign: <FaDollarSign />,
  FaInfoCircle: <FaInfoCircle />,
  FaList: <FaList />,
  FaIndustry: <FaIndustry />,
  FcRating: <FcRating />,
  GiReturnArrow: <GiReturnArrow />,
  FaShieldAlt: <FaShieldAlt />,
  FaWarehouse: <FaWarehouse />,
  FaTag: <FaTag />,
};
function IconField({icon}) {
  return (
    <div className='text-primary bg-blue-100 p-1.5 rounded-full'>
      {iconMap[icon]}
    </div>
  )
}

export default IconField
