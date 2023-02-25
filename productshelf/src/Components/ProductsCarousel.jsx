import React, { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Grid,
  Flex,
  Image,
  Spinner
} from '@chakra-ui/react';
import axios from 'axios';
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Settings for the slider
const settings = {
  infinite: true,
  speed: 300,
  slidesToShow:3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

// function ProductBox
export function ProductBox(title,price,img,id){
  return <Flex flexDirection={'row'} key={id} p='6' cursor={'pointer'}>
    <Link to={`products/${id}`}>

    <Image src={img} alt={title} />
    <Text>{title}</Text>
    <Text as={'b'}>${price}</Text>
    <Text>+$1.04/2% Cashback</Text>
    <Text>Free shipping with $125 orders</Text>
    </Link>
  </Flex>
}

export default function ProductsCarousel({mainImg,store,mainTxt}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);


  // This list contains all the data for carousels
  // This can be static or loaded from a server



  // FetchData
  function FetchData(){
    setLoading(true);
    axios.get(`https://63f1198c5b7cf4107e2d155f.mockapi.io/productsDetails`)
    .then((res)=>{
      // console.log(res.data);
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      setLoading(false);
    })
  }


  useEffect(()=>{
    FetchData();
  },[])

  
  const [slider, setSlider] = React.useState(data);

  return (<div style={{padding:'10px'}}>
  <Grid mb={'5'} templateColumns={{base:'100%',md:'30% 70%'}} p='5' gap={3}  boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}>
  <Box visibility={{base:'none',md:'visible'}}>
  <Heading as={'h3'} size='lg' mb={'2'}>{mainTxt}</Heading>
  {/* <Text>{mainTxt}</Text> */}
  <Image src={mainImg} alt={store} h='-webkit-fit-content' w={'-moz-fit-content'}/>
  </Box>
    <Box
      position={'relative'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider.slickPrev()}>
        <FontAwesomeIcon icon={faCircleChevronLeft} size={'2xl'}/>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider.slickNext()}>
        <FontAwesomeIcon icon={faCircleChevronRight} size={'2xl'}/>
      </IconButton>
      {/* Slider */}
      {loading===false? 
        <Slider {...settings} 
      ref={(slider) => setSlider(slider)}
      >
        {data?.map((card, index) => (
          card.store===store? ProductBox(card.name,card.price,card.img,card.id):''
        ))}
      </Slider>: <Spinner/>
      }
     
    </Box>
    </Grid>
    </div>
  );
}