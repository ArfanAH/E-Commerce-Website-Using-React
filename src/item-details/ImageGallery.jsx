import React from 'react'

function ImageGallery({itemDetail}) {
  return (
    <div>
      <img src={itemDetail?.images[0]}
        className='w-full h-[200px] md:h-[500px] object-cover rounded-xl lg:object-scale-down'
      />
    </div>
  )
}

export default ImageGallery
