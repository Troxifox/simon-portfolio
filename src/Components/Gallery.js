import React, { useState } from 'react';
import './Gallery.css';
import * as AiIcons from 'react-icons/ai';

const Gallery = ({ images }) => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} alt="Gallery" />
        <AiIcons.AiOutlineClose onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {images.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item)}>
              <img src={item} style={{ width: '100%' }} alt={`Image ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
