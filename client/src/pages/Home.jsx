

import React,{useState,useEffect} from 'react'
import { useStateContext } from '../contex';;
import DisplayCampaigns from '../components/DisplayCampaigns';




const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [campaigns, setCampaigns] = useState([]);

  const {address,contract,getCampaigns} = useStateContext();

  const fetchCampaigns = async ()=>{
    setIsLoading(true);

    const data = await getCampaigns();
    setCampaigns(data);

    setIsLoading(false);
  }

    useEffect(()=>{
      if(contract){
        fetchCampaigns();
      }
    },[address,contract]);

  return (
    <DisplayCampaigns title= "ALL Campaigns" isLoading={isLoading} campaigns={campaigns} />
  )
}

export default Home