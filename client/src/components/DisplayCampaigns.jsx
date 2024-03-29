import React from 'react'
import { useNavigate } from 'react-router-dom'
import {loader} from "../assets";

import FundCard  from './FundCard';



const DisplayCampaigns = ({title,isLoading,campaigns}) => {

    const navigate = useNavigate();

    const handleNavigate = (campaign)=>{
        navigate(`/campaign-details/${campaign.title}`,{state:campaign});
    }
    console.log("isLoading", isLoading);
    console.log("ppp",campaigns.length)

  return (
    <div>
        <h1 className='font-epilogue font-semibold text-white text-left text-[18px]'>{title} ({campaigns.length}) </h1>

        <div className='flex flex-wrap mt-[20px] gap-[26px]'>
            {isLoading &&(
                <img src={loader} alt='loader' className='w-[100px] h-[100px] object-contain'  />
            )}

            {!isLoading &&campaigns.length===0 &&(
                <p className='font-epilogue font-semibold text-[#818183] leading-[30px] text-[14px]'>Yoy have not created any campaigns yet...</p>
            ) }

            {!isLoading &&campaigns.length>0 && campaigns.map((campaign)=>
                <FundCard
                    key={campaign.id}
                    {...campaign}
                    handleClick={()=>handleNavigate(campaign)}

                />
               
            )}
            
                           


        </div>
    </div>
  )
}

export default DisplayCampaigns