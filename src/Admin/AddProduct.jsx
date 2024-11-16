import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import productDetails from '../Shared/productDetails.json';
import InputField from './inputField';
import DropDownfield from './DropDownfield';
import TextArea from './TextArea';
import { Button } from '@/components/ui/button';
import { ProductImage, ProductList } from './../../configs/schema';
import { db } from './../../configs';
import IconField from './IconField';
import UploadImages from './UploadImages';
import { TbLoader3 } from "react-icons/tb";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';

function AddProduct() {
  const [formData, setFormData] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState([]);
  const [searchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [productInfo, setProductInfo] = useState([]);
  const navigate = useNavigate();

  const mode = searchParams.get('mode');
  const recordId = searchParams.get('id');

  useEffect(() =>
  {
    if (mode === 'edit') {
      GetProductDetails();
    }
  }, []);


  const GetProductDetails = async () =>
  {
    const result = await db.select()
      .from(ProductList)
      .innerJoin(ProductImage,eq(ProductList.id,ProductImage.productListingId))
      .where(eq(ProductList.id, recordId));
    
    const resp = Service.FormatResult(result);
    console.log(resp);
    setProductInfo(resp[0]);
    setFormData({ ...resp[0] });
  }

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onsubmit = async (e) => {
    // e.preventDefault(); 
    setLoader(true);
    console.log(formData);

    if (mode == 'edit')
    {
      const result = await db.update(ProductList).set(formData).where(eq(ProductList.id, recordId));

      setLoader(false);
      console.log('Data Updated successfully');
      toast.success('Product updated successfully!');
          setTimeout(() =>
          {
            navigate('/AdminProfile');
          }, 2000);

    }

    else
    {
      try
      {
        const result = await db.insert(ProductList).values(formData).returning({ id: ProductList.id });

        if (result)
        {
          console.log('Data inserted successfully');
          setTriggerUploadImages(result[0]?.id);
          toast.success('Product added successfully!');
          setTimeout(() =>
          {
            navigate('/AdminProfile');
          }, 2000);
        }
      } catch (e)
      {
        console.log('Error', e);
        toast.error('Failed to add the product!');
      } finally
      {
        setLoader(false);
      }
    }
  };

  return (
    <div>
      <div>
        <div className='w-full px-4 md:px-20 my-10'>
          <h2 className='font-bold text-3xl px-2 md:text-4xl'>Add New Product</h2>
          <form className='w-full p-4 border rounded-xl mt-5 md:mt-10'>
            {/* Product Name */}
            <div>
              <h2 className='font-medium text-xl mb-6'>Product details</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {productDetails.productDetails.map((item, index) => (
                  <div key={index}>
                    <label className='text-sm flex gap-2 items-center mb-2'>
                      <IconField icon={item?.icon} />
                      {item.label}{item.required && <span className='text-red-600'> *</span>}
                    </label>
                    {item.fieldType === 'text' || item.fieldType === 'number' ? (
                      <InputField item={item} handleInputChange={handleInputChange} productInfo={productInfo} />
                    ) : item.fieldType === 'select' ? (
                      <DropDownfield item={item} handleInputChange={handleInputChange} productInfo={productInfo} />
                    ) : item.fieldType === 'textarea' ? (
                      <TextArea item={item} handleInputChange={handleInputChange} productInfo={productInfo} />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <UploadImages
              triggerUploadImages={triggerUploadImages}
              productInfo={productInfo}
              mode={mode}
              setLoader={(v) => setLoader(v)} />
            <div className='mt-10 flex justify-end'>
              <Button
                type="submit"
                disabled={loader}
                onClick={(e) => onsubmit(e)}
                className="bg-blue-600 text-white border rounded-xl hover:bg-blue-800">
                {!loader ? 'Submit' : <TbLoader3 className='animate-spin text-lg' />}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer /> 
    </div>
  );
}

export default AddProduct;
