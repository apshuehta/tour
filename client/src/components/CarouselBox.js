import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'




export const CarouselBox = ( ) => {
  const photo = [
    "http://altayresort.ru/upload/iblock/5fa/5faa6d82176fe14eef5b3e838902610d.jpg",
    "https://sites.google.com/site/prirodanaha/_/rsrc/1468741750018/home/%D0%96%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpg",
    "https://i.ytimg.com/vi/OXuIqaeg0SI/maxresdefault.jpg",
    "https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg",
    "http://altayresort.ru/upload/iblock/5fa/5faa6d82176fe14eef5b3e838902610d.jpg",
    "https://i.ytimg.com/vi/OXuIqaeg0SI/maxresdefault.jpg",
    "https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg",
    "http://altayresort.ru/upload/iblock/5fa/5faa6d82176fe14eef5b3e838902610d.jpg"
  ]

  const image = photo.map((i) => {
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={i}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  })
  
   return(
    <Carousel>
      <Carousel.Item>
        {image}
      </Carousel.Item>
    </Carousel>
   )
}