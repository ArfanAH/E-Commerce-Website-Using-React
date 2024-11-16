import React, { useEffect, useState } from 'react';
import Items from './Items';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from './../../configs';
import { ProductImage, ProductList } from './../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import Service from '@/Shared/Service';

function MostSearchItems()
{
  const [items, setItems] = useState([]);

  useEffect(() =>
  {
    GetPopularItems();
  }, []);
  
  const GetPopularItems = async () =>
  {
    const result = await db.select()
      .from(ProductList)
      .leftJoin(ProductImage, eq(ProductList.id, ProductImage.productListingId))
      .orderBy(desc(ProductList.id))
      .limit(20);
    
    
    const resp = Service.FormatResult(result);
    console.log(resp);
    setItems(resp);
  }
  return (
    <div className="mx-10 my-10 px-5 md:mx-12 lg:mx-24">
      <h2 className="font-bold text-3xl text-center mb-6">Todays Deals</h2>
      <Carousel >
        <CarouselContent >
          {items.map((item, index) => (
            <CarouselItem
            className="lg:basis-1/6 md:basis-1/4 sm:basis-1/2"
            key={index}
          >
            <Items item={item} />
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  );
}

export default MostSearchItems;
