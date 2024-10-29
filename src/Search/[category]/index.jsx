import Header from '@/components/Header'
import Search from '@/components/Search'
import { db } from './../../../configs';
import { ProductImage, ProductList } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Service from '@/Shared/Service';
import Items from '@/components/Items';

function SearchByCategory()
{
  
  const { category } = useParams();
  const [productList, setProductList] = useState([]);


  useEffect(() =>
  {
    GetProductList();
  },[]);

  const GetProductList = async () =>
  {
    const result = await db.select().from(ProductList)
      .innerJoin(ProductImage, eq(ProductList.id, ProductImage.productListingId))
      .where(eq(ProductList.category, category))
    
    const resp = Service.FormatResult(result);
    setProductList(resp);
   }
  return (
    <div>
      <Header />
      <div className='p-10 bg-black flex justify-center'>
        <Search/>
      </div>
      <div className='p-10 md:px-20'>
        <h2 className='font-bold text-4xl '>{category}</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-7'>
        {productList?.length>0? productList.map((item, index) => (
          <div key={index}>
            <Items item={item} />

          </div>
        )):
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <div className='h-[200px] rounded-xl bg-slate-200 animate-pulse'>

              </div>
          
        ))
            
      }
        </div>
        
      </div>
    </div>
  )
}

export default SearchByCategory
