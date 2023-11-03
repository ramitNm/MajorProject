import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';

const FAQ = () => {
  const faqData = [
    {
      question: 'What are the rental options available?',
      answer: 'We offer a variety of rental options, including flats, independent houses, and mansions.',
    },
    {
      question: 'How can I find a property in a specific location?',
      answer: 'You can use our search feature to find properties in your desired location.',
    },
    {
      question: 'How can I find a property in a specific location?',
      answer: 'You can use our search feature to find properties in your desired location.',
    },
    {
      question: 'How can I find a property in a specific location?',
      answer: 'You can use our search feature to find properties in your desired location.',
    },
    {
      question: 'How can I find a property in a specific location?',
      answer: 'You can use our search feature to find properties in your desired location.',
    }
    // Add more FAQ items as needed
  ];

  return (
    <Container maxWidth="xl" style={{ marginLeft: '0px', width: '100%', marginTop: '10px' }}>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{ borderRadius: '20px', width:'1144px'}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
        <SwiperSlide style={{ height: '260px'}}><h3 className='swipe_1' style={{textAlign:"center", marginTop:"100px"}}>FAQs</h3></SwiperSlide>
        <SwiperSlide style={{ height: '260px' }}><p className='swipe_1' style={{textAlign:"center", marginTop:"100px"}}><b>question: What are the rental options available?</b><br/>
      <b>answer: We offer a variety of rental options, including flats, independent houses, and mansions.</b></p></SwiperSlide>
        <SwiperSlide style={{ height: '260px' }}><p className='swipe_1' style={{textAlign:"center", marginTop:"100px"}}><b>question: What are the rental options available?</b><br/>
      <b>answer: We offer a variety of rental options, including flats, independent houses, and mansions.</b></p></SwiperSlide>
        <SwiperSlide style={{ height: '260px' }}><p className='swipe_1' style={{textAlign:"center", marginTop:"100px"}}>Hyderabad</p></SwiperSlide>
        <SwiperSlide style={{ height: '260px' }}><p className='swipe_1' style={{textAlign:"center", marginTop:"100px"}}>Delhi</p></SwiperSlide>
        <SwiperSlide style={{ height: '260px' }}><p className='swipe_1' style={{textAlign:"center", marginTop:"100px"}}>Pune</p></SwiperSlide>
    </Swiper>
    </Container>
  );
};

export default FAQ;
