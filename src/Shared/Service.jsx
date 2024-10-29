import axios from "axios";

const FormatResult = (resp) => {
  let result = {};
  let finalResult = [];

  resp.forEach((item) => {
    const productId = item.productList?.id;

    if (!result[productId]) {
      result[productId] = {
        ...item.productList, 
        images: []      
      };
    }


    if (item.productImage && item.productImage.imageUrl) {
      result[productId].images.push(item.productImage.imageUrl);
    }
  });

  Object.values(result).forEach((item) => {
    finalResult.push(item);
  });

  return finalResult;
};
const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID
const SendBirdApiToken =import.meta.env.VITE_SENDBIRD_API_TOKEN
const CreateSendBirdUser = (userId,nickName,profileUrl) =>
{
  return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/users',{
    user_id: userId,
    nickname: nickName,
    profile_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_Z8NkJTKQmhsyBuGnRsAgd7TiOPuaf7Raw&s',
    issue_access_token: false
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': SendBirdApiToken
    }
  })
}

const CreateSendBirdChannel = (users,title) =>
{
  return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/group_channels', {
    user_ids: users,
    is_distinct: true,
    name: title,

  }, {
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': SendBirdApiToken
    }
  })
}

export default {
  FormatResult,
  CreateSendBirdUser,
  CreateSendBirdChannel
};
