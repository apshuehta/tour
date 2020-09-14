import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'



export const Photo = (props) =>  {
  const ima = props.photo.map((i) => <img src={i} alt={i} className="yours-custom-class" style={{height: '78vh'}}/>)
  console.log(ima);
  return (
    <div className="container" >
      <AliceCarousel
        autoPlay={true}
        fadeOutAnimation={true}
        autoPlayInterval={2000}
      >
        {ima}
      </AliceCarousel>
   </div>
  )
}

