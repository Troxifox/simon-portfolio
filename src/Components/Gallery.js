import React, {useState} from 'react';
import './Gallery.css';
import Img1 from './img/img1.png';
import Img2 from './img/img1.png';
import Img3 from './img/img1.png';
import * as AiIcons from 'react-icons/ai';

const Gallery = () => {
    
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} />
            <AiIcons.AiOutlineClose onClick={()=> setModel(false)}/>
        </div>
        <div className="gallery">
            {data.map((item, index)=> {
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>

        </>
    )

}

export default Gallery
