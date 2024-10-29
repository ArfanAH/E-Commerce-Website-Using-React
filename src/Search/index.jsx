import Service from '@/Shared/Service';
import { db } from './../../configs';
import { ProductImage, ProductList } from './../../configs/schema';
import { eq, sql } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Search from '@/components/Search';
import Items from '@/components/Items';

function SearchByOptions() {
  const [searchParam] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const product = searchParam.get('product');
  console.log('Searching for product:', product);

  useEffect(() => {
    if (product) {
      GetProductList();
    }
  }, [product]);

  const GetProductList = async () => {
    try {
      const product = searchParam.get('product');
      console.log('Searching for product:', product);
  
      const result = await db
        .select()
        .from(ProductList)
        .leftJoin(ProductImage, eq(ProductList.id, ProductImage.productListingId))
        .where(sql`${ProductList.productName} ILIKE ${`%${product}%`}`);
      
      console.log('Query result:', result);
  
      const resp = Service.FormatResult(result);
      console.log('Formatted response:', resp);
      setProductList(resp);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  return (
    <div>
      <Header />
      <div className='p-10 bg-black flex justify-center'>
        <Search />
      </div>
      <div className='p-10 md:px-20'>
        <h2 className='font-bold text-4xl'>Search Results for &quot;{product}&quot;</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-7'>
          {productList.length > 0 ? productList.map((item, index) => (
            <div key={index}>
              <Items item={item} />
            </div>
          )) : (
            [1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className='h-[200px] rounded-xl bg-slate-200 animate-pulse'></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchByOptions;
