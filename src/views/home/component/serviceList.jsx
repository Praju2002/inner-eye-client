import React from 'react'
import { Box } from '@mui/material'
import ServiceCard from './service_card'
import Slider from 'react-slick';

function ServiceList({serviceList}) {
    const settings = {
        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        pauseOnHover: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    console.log("service list",serviceList);
    return (
        <Box className="center__carousel" sx={{ padding: "47px" }} >
            <Slider {...settings}>
              {
                serviceList?.map((item)=>{
                 return <ServiceCard key={item?._id} item={item}/>
                }
                )
              }
                
            </Slider>
        </Box>
    )
}

export default ServiceList