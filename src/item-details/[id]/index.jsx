import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from '../DetailHeader'
import { useParams } from 'react-router-dom';
import { db } from './../../../configs';
import { ProductImage, ProductList } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import ImageGallery from '../ImageGallery';
import Description from '../Description';
import Price from '../Price';
import ReturnWarranty from '../ReturnWarranty';
import SellerDetails from '../SellerDetails';
import Footer from '@/components/Footer';
import MostSearchItems from '@/components/MostSearchItems';


function ItemDetails()
{
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState();
  

  useEffect(() =>
  { 
    GetProductDetails();
  }, []);

  const GetProductDetails =async () =>
  {
    const result = await db.select().from(ProductList)
      .innerJoin(ProductImage, eq(ProductList.id, ProductImage.productListingId))
      .where(eq(ProductList.id, id))
    
    const resp = Service.FormatResult(result);
    setItemDetail(resp[0]);
  }
  return (
    <div>
      <Header />
      <div className='p-10 md:px-20'>
        <DetailHeader itemDetail={itemDetail} />
        
        <div className='grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5 '>
          {/* left */}
          <div className='md:col-span-2 '>
            {/* Image */}
            <ImageGallery itemDetail={itemDetail } />

            {/* description */}

            <Description itemDetail={ itemDetail} />

            {/* productDetails */}

          </div>

          {/* right */}
          <div className=''>
            {/* price */}
            <Price itemDetail={itemDetail} />
            
            <ReturnWarranty itemDetail={itemDetail} />
            
            <SellerDetails itemDetail={itemDetail} />

            {/* quantity */}

            {/* manufacturer */}

          </div>
        </div>
        <MostSearchItems/>
      </div>
      <Footer/>
    </div>
  )
}

export default ItemDetails
