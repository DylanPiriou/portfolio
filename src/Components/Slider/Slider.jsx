import React, { useState, useRef, useEffect } from 'react';
import "./Slider.scss";
import { RxChevronLeft } from "react-icons/rx";
import { RxChevronRight } from "react-icons/rx";

export default function Slider({ project }) {

  const [position, setPosition] = useState(0);
  const [imgWidth, setImgWidth] = useState();
  const [sliderLength, setSliderLength] = useState();
  const slider = useRef();

  // Récupération de la largeur des images et de la longeur du tableau au chargement de la page
  useEffect(() => {
    setImgWidth(slider.current.offsetWidth);
    setSliderLength(project.slider.length);
  }, [slider])
  
  const totalWidth = imgWidth * sliderLength;

  // Logique pour aller en arrière
  const handlePrev = () => {
    let newPos = position + imgWidth;
    if(newPos > 0){
      newPos = -totalWidth + imgWidth;
    }
    setPosition(newPos);
  }

  // Logique pour aller en avant
  const handleNext = () => {
    let newPosition = position - imgWidth;
    if (newPosition < -totalWidth + imgWidth) {
      newPosition = 0;
    }
    setPosition(newPosition);
  }

  return (
    <div className="slider" ref={slider}>
        <div className="slider-container" style={{ transform: `translateX(${position}px)` }} >
          {project.slider.map((img, index) => {
            return <img key={`img-${index}`} src={img} className="img-slider" alt="" />
          })}
        </div>
        <span className="btn" id="prev" onClick={() => handlePrev()}><RxChevronLeft /></span>
        <span className="btn" id="next" onClick={() => handleNext()}><RxChevronRight /></span>
    </div>
  )
}
