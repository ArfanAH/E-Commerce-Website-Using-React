import { ProductImage, ProductList } from './../../configs/schema';
import { db } from './../../configs';
import React, { useEffect, useState } from 'react'
import { desc, eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import Items from '@/components/Items';
import { Button } from '@/components/ui/button';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function Products()
{

  const [products, setProducts] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  useEffect(() =>
  {
    Getproducts();
  }, []);


  const Getproducts = async() =>
  {
    const result = await db.select()
    .from(ProductList)
    .leftJoin(ProductImage, eq(ProductList.id, ProductImage.productListingId))
    .orderBy(desc(ProductList.id));
  
    
    const resp =Service.FormatResult(result);
    console.log(resp);
    setProducts(resp);

  }

  const handleDelete = async (productId) => {
    try {
      // Delete associated images first
      await db.delete(ProductImage).where(eq(ProductImage.productListingId, productId));
  
      // Then delete the product
      await db.delete(ProductList).where(eq(ProductList.id, productId));
  
      // Fetch updated product list after deletion
      Getproducts();
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Failed to delete product:', error);
    } finally {
      setIsDialogOpen(false); // Close the dialog
    }
  };
  


  return (
    <div className='mt-6'>
      <div className='flex justify-start'>
        <h2 className='font-bold text-4xl'>Products</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
        {products.map((item, index) => (
          <div key={index}>
            <Items item={item} />
            <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-3'>
              <Link to={'/AddProduct?mode=edit&id=' + item?.id} className='w-full'>
                <Button variant='outline' className='w-full'>
                  Edit
                </Button>
              </Link>

              {/* Delete button and dialog */}
              <AlertDialog open={isDialogOpen && productToDelete === item.id} onOpenChange={setIsDialogOpen}>
                <AlertDialogTrigger asChild>
                  <Button variant='outline' onClick={() => setProductToDelete(item.id)}>
                    <FaTrashAlt className='text-red-600' />
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent className="bg-white rounded-lg p-6 shadow-lg">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-lg font-bold">Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription className="text-sm text-gray-600">
                      This action cannot be undone. This will permanently delete the product from our database.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="mt-4 flex justify-end gap-4">
                    <AlertDialogCancel onClick={() => setIsDialogOpen(false)}
                      className="text-gray-600 border-gray-500 hover:text-black hover:border-black">
                      Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDelete(productToDelete)}
                      className="bg-red-600 text-white hover:bg-red-700">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
