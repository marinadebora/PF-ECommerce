import React, { useState } from "react";
import ImagesDetail from "../imagenes/images";
import "../styles/imagesDetail.css";
import { useSelector } from "react-redux";

export default function ImageDetail() {
  const myDetail = useSelector(state => state.detail);  
  const [selectedImg, setSelectedImg] = useState(myDetail.imagenes);
  return (
    <div className='main'>
    <div className="ImagesDetail">
      <div className="container">
        <img id='imgD' src={selectedImg} alt="imgDetail" className="imgDetail" />
        <div className="containerImages">
          {myDetail.imagenes?.map((img, index) => (
            <img
              id='imgD'
              style={{ border: selectedImg === img ? "4px solid #01bfc4" : "" }}
              key="index"
              src={img}
              alt="products"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
