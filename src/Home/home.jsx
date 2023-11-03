import React, { useRef, useState } from 'react';
import './home.css';
import Footer from "../footer/footer";
import { Header } from "../header/header";
import { Burger_2 } from "../Burger_2/burger_2";
import FAQ from './FAQ';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

const propertyData = [
    {
        id: 1,
        title: 'Flats',
        description: 'Whether you are a student, a young professional, or someone who prefers the simplicity of apartment living, our collection of flats for rent offers modern designs, convenient locations, and a range of amenities.',
        imageUrl: 'https://images.pexels.com/photos/2077937/pexels-photo-2077937.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 2,
        title: 'Independent Houses',
        description: 'Families or individuals seeking more space and privacy will find our selection of houses for rent to be truly impressive. we have all the options that cater to various preferences.',
        imageUrl: 'https://images.pexels.com/photos/1717272/pexels-photo-1717272.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 3,
        title: 'Mensions',
        description: 'If you are looking for the finer things in life, explore our luxury rental properties that feature premium finishes, top-notch facilities, and breathtaking views, these mensions will blow your mind with their space & luxury .',
        imageUrl: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

export const Home = () => {
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="component_class">
                <Header />
                {/* <Burger_2 /> */}
            </div>
            <Container maxWidth="xl" style={{ marginLeft: '0px', width: '100%', marginTop: '10px' }}>
            <Typography variant="h2" align="center" gutterBottom>
                    <b>Welcome to KeeProp</b>
                </Typography>
                <Typography variant="h2" align="center" gutterBottom>
                    <b>Your Trusted Source For Rental</b>
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    Are you in search of the perfect place to call home? Look no further! At Keeprop, we understand the importance of finding a space that resonates with your lifestyle, preferences, and needs. Our vast selection of rental houses and flats offers something for everyone, whether you're a young professional, a family, or someone simply looking for a change of scenery.
                </Typography>
                </Container>
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
                    style={{ borderRadius: '20px' }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src='\src\KeeProp Icons\pexels-expect-best-323780.jpg' style={{ maxHeight: '460px' }} /><h3 className='swipe_1'>Mumbai</h3></SwiperSlide>
                    <SwiperSlide><img src='\src\KeeProp Icons\pexels-expect-best-323780.jpg' style={{ maxHeight: '460px' }} /><h3 className='swipe_1'>Bangluru</h3></SwiperSlide>
                    <SwiperSlide><img src='\src\KeeProp Icons\pexels-expect-best-323780.jpg' style={{ maxHeight: '460px' }} /><h3 className='swipe_1'>Chennai</h3></SwiperSlide>
                    <SwiperSlide><img src='\src\KeeProp Icons\pexels-expect-best-323780.jpg' style={{ maxHeight: '460px' }} /><h3 className='swipe_1'>Hyderabad</h3></SwiperSlide>
                    <SwiperSlide><img src='\src\KeeProp Icons\pexels-expect-best-323780.jpg' style={{ maxHeight: '460px' }} /><h3 className='swipe_1'>Delhi</h3></SwiperSlide>
                    <SwiperSlide><img src='\src\KeeProp Icons\pexels-expect-best-323780.jpg' style={{ maxHeight: '460px' }} /><h3 className='swipe_1'>Pune</h3></SwiperSlide>
                </Swiper>
                <Typography variant="h3" allign="center" paragraph>
                    Explore Our Offerings
                </Typography>
                <Grid container spacing={3}>
                    {propertyData.map((property) => (
                        <Grid item xs={12} sm={6} md={4} key={property.id}>
                            <Card>
                                <Slider {...slickSettings}>
                                    <div>
                                        <img src={property.imageUrl} alt={property.title} />
                                    </div>
                                </Slider>
                                <CardContent>
                                    <Typography variant="h6">{property.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {property.description}
                                    </Typography>
                                    <Typography variant="h6" color="primary">
                                        {property.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" color="primary">
                                        View Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Grid>                
                </Grid>
            </Container>
            <Container maxWidth="xl" style={{ marginLeft: '0px', width: '100%', marginTop: '10px' }}>
            <Grid>
                    <FAQ />
                </Grid>
            </Container>
            <div className="component_class">
                <Footer />
            </div>
        </>
    )
}