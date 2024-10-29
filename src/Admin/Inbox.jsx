import React, { useEffect, useState } from 'react'
import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useUser } from '@clerk/clerk-react';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';

function Inbox()
{
  const { user } = useUser();
  const [userId, setUserId]= useState();
  const [nickName, setNickName] = useState();
  const [channelUrl, setChannelUrl] = useState();
  
  useEffect(() =>
  {
    if (user)
    {
      const id = (user, 'jonh@gmail.com').spilt('@')[0];
      const name = 'Arfan';
      setUserId(userId)
      setNickName(name)
    }
  }, [user]);
  return (
    <div>
      <div style={{ width: '100%', height: '500px' }}>
        <SendBirdProvider
          appId={import.meta.env.VITE_SENDBIRD_APP_ID}
          userId={userId}
          nickname={nickName}
          profileUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_Z8NkJTKQmhsyBuGnRsAgd7TiOPuaf7Raw&s'}
          allowProfileEdit={true}
        >

          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 h-full border-spacing-2'>
            <div className='p-5 border shadow-lg'>
              <GroupChannelList
                onChannelSelect={(channel) =>
                {
                  setChannelUrl(channel?.url);
                }}
                channelListQueryParams={
                  {
                    includeEmpty:true
                  }
                }
              />
            </div>
            <div className='md:col-span-2 shadow-lg'>
            <GroupChannel channelUrl={channelUrl} />
            </div>
          </div>

        </SendBirdProvider>
      {/* <SendbirdApp
        // You can find your Sendbird application ID on the Sendbird dashboard. 
        appId={import.meta.env.VITE_SENDBIRD_APP_ID}
        // Specify the user ID you've created on the dashboard.
        // Or you can create a user by specifying a unique userId.  
        userId={'edward'}
      /> */}
    </div>
    </div>
  )
}

export default Inbox
