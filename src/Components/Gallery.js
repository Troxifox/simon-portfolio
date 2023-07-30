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

  const downloadImage = () => {
    fetch(tempimgSrc)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `image-${Date.now()}.png`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} alt="Gallery" />
        <div className="icons-container">
          <div className="download-icon" onClick={downloadImage}>
            <AiIcons.AiOutlineDownload />
          </div>
          <div className="close-icon" onClick={() => setModel(false)}>
            <AiIcons.AiOutlineClose />
          </div>
        </div>
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
