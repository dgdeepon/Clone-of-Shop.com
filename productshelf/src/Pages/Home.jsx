import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Container, Flex, Grid, Heading, Image,Spacer,Text} from '@chakra-ui/react'
import ProductsCarousel from '../Components/ProductsCarousel'
import MidBannerOptions from '../Components/MidBannerOptions';
import SingleLineCarousel from '../Components/SingleLineCarousel';
import Footer from '../Components/Footer'
import BackToTop from '../Components/BackToTop';



function Home() {
  return (
    <div>
      <Navbar/>
      <Image pt={{base:180,sm:170,md:160}} src='https://img.shop.com/Image/homepage/shop-usa-eng-106101-presidents-day-banner-hero-min1676564945923.jpg' alt='topbanner'/>
      {/* Static Options */}
      <Grid templateColumns={{base:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(3,1fr)',xl:'repeat(4,1fr)'}} textAlign='left' p={5} gap='10'>
        <Box boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;' p={3}>
          <Text fontSize={'xl'}>
          Costway 8pc Outdoor Patio Rattan Furniture Set. Was: $1,579.99 Now: $1,018.95
          </Text>
          <Image src='https://img.shop.com/Image/280000/284400/284458/products/1885773886.jpg?plain&size=300x300' alt='banner1' />
          <Text as={'u'} fontSize='lg' cursor={'pointer'}>
            Buy Now
          </Text>
        </Box>
        <Box  boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;' p={3}>
          <Image src='https://img.shop.com/Image/homepage/us-backcountry-SemiAnnualSale-60off-300x250-img1676389319135.jpeg' alt='banner1' />
          <Text as={'u'} fontSize='lg' cursor={'pointer'}>
            Buy Now
          </Text>
        </Box>
        <Box  boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;' p={3}>
          <Image src='https://img.shop.com/Image/homepage/shop-eng-Lole-300x250-img1676307848468.jpg' alt='banner1' />
        </Box>
        <Box  boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;' p={3}>
          {/* <Text fontSize={'xl'}>
          Costway 8pc Outdoor Patio Rattan Furniture Set. Was: $1,579.99 Now: $1,018.95
          </Text> */}
          <Image src='https://img.shop.com/Image/homepage/us-gap-winter-feb231676913706578.png?id=5269071' alt='banner1' />
          {/* <Text as={'u'} fontSize='lg' cursor={'pointer'}>
            Buy Now
          </Text> */}
        </Box>
      </Grid>

      {/* Product Carousel */}
      <ProductsCarousel mainImg={'https://img.shop.com/Image/homepage/motives-usa-can-107525-lash-and-brow-serum-banner-bgsq-min1676991661086.jpg?id=5269139'} store='Motives® Cosmetics' mainTxt={'Luxury Beauty by Motives'} />

      {/* MidBannerOptions */}
      <Container display={'flex'} w='100%' flexDirection={'column'} alignItems='center' p='10px' mb={'5'}>
      <Heading>St. Patrick's Day</Heading>
        <Flex mt={'5'} p='10px' flexWrap={{base:'wrap',sm:'wrap',lg:'revert-layer'}}>
          <MidBannerOptions link={'https://img.shop.com/Image/240000/248000/248061/products/1927178134.jpg?plain&size=400x400&id=5268629'} txt={'PARTY DECORATIONS'}/>
          <MidBannerOptions link={'https://img.shop.com/Image/260000/264400/264491/products/1637075340.jpg?plain&size=400x400&id=5268630'} txt={'COSTUMES & ACCESSORIES'}/>
          <MidBannerOptions link={'https://img.shop.com/Image/210000/217300/217306/products/1951432818.jpg?plain&size=400x400&id=5268631'} txt={'PARTY TABLEWARE'}/>
          <MidBannerOptions link={'https://img.shop.com/Image/240000/248000/248061/products/1324047590.jpg?plain&size=400x400&id=5268632'} txt={'PARTY FAVORS'}/>
          <MidBannerOptions link={'https://img.shop.com/Image/290000/291200/291280/products/1923139345.jpg?plain&size=400x400&id=5268633'} txt={'CLOTHES'}/>
          <MidBannerOptions link={'https://img.shop.com/Image/240000/243400/243406/products/1922561911.jpg?plain&size=400x400&id=5268634'} txt={'HOME STORE'} />
        </Flex>
      </Container>

      {/* Product Carousel */}
      <ProductsCarousel store={'Lumière de Vie®'} mainImg='https://img.shop.com/Image/homepage/ldv-usa-eng-106125-revive-reset-facial-mist-banners-updated-sq1675889170267.jpg?id=5267813' mainTxt={'Skin Care from Lumière de Vie'} />
      {/* MidBannerOptions */}
      <Container display={'flex'} w='100%' flexDirection={'column'} alignItems='center' p='10px' mb={'5'}>
      <Heading>Spring Cleaning</Heading>
        <Flex mt={'5'} p='10px' flexWrap={{base:'wrap',sm:'wrap',lg:'revert-layer'}}>
          <MidBannerOptions link='https://img.shop.com/Image/240000/243300/243390/products/1954251853.jpg?plain&size=750x750&id=5269161' txt={'HOUSEHOLD CLEANERS'}/>
          <MidBannerOptions link={'https://img.shop.com/Image/240000/243300/243390/products/1954251883.jpg?plain&size=750x750&id=5269162'} txt={'CLEANING TOOLS'}/>
          <MidBannerOptions link={'https://img.shop.com/Image/260000/263100/263143/products/1836611183.png?plain&size=400x400&id=5269163'} txt={'AIR FRESHENERS'}/>
          <MidBannerOptions link={'https://img.shop.com/Image/240000/243400/243406/products/1944813894.jpg?plain&size=400x400&id=5269164'} txt={'BINS & BASKETS'}/>
          <MidBannerOptions link={'https://img.shop.com/Image/280000/287300/287312/products/1951857838.jpg?plain&size=400x400&id=5269165'} txt='DRAWER ORGANIZERS & TRAYS'/>
          <MidBannerOptions link={'https://img.shop.com/Image/280000/284400/284458/products/1874058298.jpg?plain&size=400x400&id=5269166'} txt='CLOSET ORGANIZERS' />
        </Flex>
      </Container>

      {/* Product Carousel */}

      <ProductsCarousel mainTxt={'Shine in Layered Jewelry'} mainImg={'https://img.shop.com/Image/homepage/layered-usa-107522-winter-2023-banner-bgsq-min1674151934885.jpg'} store={"Layered"}/>
    <Spacer/>

      {/* Normal Carousel */}
      <SingleLineCarousel condition={'Health & Nutrition'} mainTxt='Cleaning & Health Have Never Been More Important'/> 

    {/* Product Carousel */}
      <ProductsCarousel mainTxt={'Cutter & Buck'} mainImg={'https://img.shop.com/Image/250000/253200/253251/products/alt_843659150.jpg?plain&size=1001x1001'} store={'Cutter & Buck'}/>

      {/* Our Brands */}
      <div style={{width:'80%',margin:'auto',marginBottom:'50px'}}>
      <Heading>Our Brands</Heading>
      <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(5,1fr)'}} mt='3'>
          <Box boxSize={'200px'} mb='50px'>
            <Text as={'b'} size='2xl'>HEALTH & NUTRITION</Text>
            <Image src='https://img.shop.com/Image/homepage/healthnutirtion1572880380738.jpg?id=5014114' alt='HEALTH & NUTRITION'  />
          </Box>
          <Box boxSize={'200px'} mb='50px'>
            <Text as={'b'} size='mb'>BEAUTY</Text>
            <Image src='https://img.shop.com/Image/homepage/lipstick1572880828301.jpg?id=5014118' alt='BEAUTY' />
          </Box>
          <Box boxSize={'200px'} mb='50px'>
            <Text as={'b'} size='mb'>HOME & CLEANING</Text>
            <Image src='https://img.shop.com/Image/homepage/home_ma1572880950379.jpg?id=5014120' alt='HOME & CLEANING' />
          </Box>
          <Box boxSize={'200px'} mb='50px'>
            <Text as={'b'} size='mb'>BABY & KIDS</Text>
            <Image src='https://img.shop.com/Image/homepage/baby-kids1572881179463.jpg?id=5014124' alt='BABY & KIDS' />
          </Box>
          <Box boxSize={'200px'} mb='50px'>
            <Text as={'b'} size='mb'>JEWELRY</Text>
            <Image src='https://img.shop.com/Image/homepage/1840336563__225x225-img__.jpg?id=5015192' alt='JEWELRY' />
          </Box>
      </Grid>
      </div>
        <BackToTop/>
      <Footer/>
    </div>
  )
}

export default Home