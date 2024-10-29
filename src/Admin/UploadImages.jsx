import { Button } from '@/components/ui/button';
import { storage } from './../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { db } from './../../configs';
import { ProductImage } from './../../configs/schema';
import { eq } from 'drizzle-orm';

function UploadImages({ triggerUploadImages, setLoader, productInfo, mode }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [editProductImages, setEditProductImages] = useState([]);

  useEffect(() => {
    if (mode === 'edit' && productInfo.images) {
      const imageUrls = productInfo.images.map(image => image.imageUrl);
      setEditProductImages(imageUrls);
    }
  }, [mode, productInfo]);

  useEffect(() => {
    if (triggerUploadImages) {
      uploadImagesToServer();
    }
  }, [triggerUploadImages]);

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setSelectedFiles((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(result);
  };

  const onImageRemoveFromDB = async (imageUrl) => {
    const imageToDelete = editProductImages.find(image => image === imageUrl);
    if (imageToDelete) {
      const result = await db.delete(ProductImage).where(eq(ProductImage.imageUrl, imageToDelete));
      if (result) {
        setEditProductImages((prev) => prev.filter(item => item !== imageToDelete));
      }
    }
  }

  const uploadImagesToServer = async () => {
    if (selectedFiles.length === 0) {
      return;
    }
  
    setLoader(true);
  
    try {
      for (const file of selectedFiles) {  // Changed from forEach to for...of
        const fileName = Date.now() + '_' + file.name;
        const storageRef = ref(storage, 'E-Commerce/' + fileName);
        const metaData = { contentType: file.type };
  
        // Upload the file
        await uploadBytes(storageRef, file, metaData);
        console.log('File uploaded:', fileName);
  
        // Get the download URL
        const downloadURL = await getDownloadURL(storageRef);
        console.log('Download URL:', downloadURL);
  
        // Insert the image URL into the database
        await db.insert(ProductImage).values({
          imageUrl: downloadURL,
          productListingId: triggerUploadImages // Ensure this is the correct ID
        });
      }
      
      console.log('All files uploaded successfully');
    } catch (error) {
      console.log('Error uploading images:', error);
    } finally {
      setLoader(false);
    }
  };
  

  return (
    <div className="my-10">
      <h2 className="font-medium text-xl my-4">Upload Product Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {mode === 'edit' && editProductImages.map((image, index) => (
          <div key={index}>
            <IoIosCloseCircle onClick={() => onImageRemoveFromDB(image)} />
            <img
              src={image}
              alt="Product"
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}

        {selectedFiles.map((image, index) => (
          <div key={index}>
            <IoIosCloseCircle onClick={() => onImageRemove(image, index)} />
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg font-bold text-center text-primary">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          onChange={onFileSelected}
          className="opacity-0"
        />
      </div>
    </div>
  );
}

export default UploadImages;
