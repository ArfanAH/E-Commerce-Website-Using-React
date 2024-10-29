import { Button } from '@/components/ui/button';
import React from 'react'
import { LiaIndustrySolid } from "react-icons/lia";
import { BiMessageSquareDots } from "react-icons/bi";
import Service from '@/Shared/Service';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function SellerDetails({ itemDetail })
{
  const navigation = useNavigate();

  const {user}=useUser();
  const OnMessageSellerButtonClick = async () =>
  {
    const userId = (user, 'arfan@gmail.com').split('@')[0];
    const nickName = 'Arfan Ahmed';
    const sellerUserId = (user, 'jonh@gmail.com').split('@')[0];
    const nickName2 = 'John';
    try
    {
      
      await Service.CreateSendBirdUser(userId,nickName, user?.profileImageUrl).then((resp) =>
      {
        console.log(resp);

      });
    } catch (e)
    {
      
    }

    try{
      
      await Service.CreateSendBirdUser(sellerUserId, nickName2, user?.profileImageUrl).then((resp) =>
        {
          console.log(resp);
        });
    } catch (e) { }
    
    try
    { 
      await Service.CreateSendBirdChannel([userId, sellerUserId], itemDetail?.productName).then((resp) =>
      {
        console.log(resp);
        console.log("Created Channel");
        navigation('/');
      });
    }catch (e) { }
  }
  return (
    <div className='mt-5 p-4 borer rounded-xl shadow-md'>
      <h2 className='text-sm font-semibold mb-2'>Seller/ Dealer Details</h2>
      <div className='flex items-center mb-2'>
          <LiaIndustrySolid className='text-lg mr-2' />
          <h2 className='font-bold text-sm'>{itemDetail?.manufacturer}</h2>
      </div>
      <Button className="w-full mt-3 bg-blue-500 text-white border rounded-xl hover:bg-blue-600"
      onClick ={OnMessageSellerButtonClick}
      ><BiMessageSquareDots className='text-lg mr-2' />Message Seller</Button>
    </div>
  )
}

export default SellerDetails
