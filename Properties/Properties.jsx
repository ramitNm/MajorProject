import React, { useRef, useState } from 'react';
import Footer from "../footer/footer";
import { Header } from "../header/header";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        Type: 'Apartment-2BHK',
        Location: 'Kharadi',
        imageUrl: 'https://images.pexels.com/photos/18326835/pexels-photo-18326835/free-photo-of-wooden-villa-entrance-with-steps-and-white-doors.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 2,
        Type: 'Independent House',
        Location: 'Khadki',
        imageUrl: 'https://images.pexels.com/photos/18326835/pexels-photo-18326835/free-photo-of-wooden-villa-entrance-with-steps-and-white-doors.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 3,
        Type: 'Appartment-3BHK',
        Location: 'Baner',
        imageUrl: 'https://images.pexels.com/photos/18326835/pexels-photo-18326835/free-photo-of-wooden-villa-entrance-with-steps-and-white-doors.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 4,
        Type: 'Apartment-2BHK',
        Location: 'Kharadi',
        imageUrl: 'https://images.pexels.com/photos/18326835/pexels-photo-18326835/free-photo-of-wooden-villa-entrance-with-steps-and-white-doors.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 5,
        Type: 'Independent House',
        Location: 'Khadki',
        imageUrl: 'https://images.pexels.com/photos/18326835/pexels-photo-18326835/free-photo-of-wooden-villa-entrance-with-steps-and-white-doors.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 6,
        Type: 'Appartment-3BHK',
        Location: 'Baner',
        imageUrl: 'https://images.pexels.com/photos/18326835/pexels-photo-18326835/free-photo-of-wooden-villa-entrance-with-steps-and-white-doors.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 7,
        Type: 'Apartment-2BHK',
        Location: 'Kharadi',
        imageUrl: 'https://images.pexels.com/photos/18326835/pexels-photo-18326835/free-photo-of-wooden-villa-entrance-with-steps-and-white-doors.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 8,
        Type: 'Independent House',
        Location: 'Khadki',
        imageUrl: 'https://images.pexels.com/photos/18326835/pexels-photo-18326835/free-photo-of-wooden-villa-entrance-with-steps-and-white-doors.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 9,
        Type: 'Appartment-3BHK',
        Location: 'Baner',
        imageUrl: 'https://images.pexels.com/photos/18326835/pexels-photo-18326835/free-photo-of-wooden-villa-entrance-with-steps-and-white-doors.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

export const Properties = () => {
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
            </div>
    <Container>
      <Typography variant="h3" allign="center" paragraph>
                    Properties Found In Pune
                </Typography>
                <Grid container spacing={3}>
                    {propertyData.map((property) => (
                        <Grid item xs={12} sm={6} md={4} key={property.id}>
                            <Card>
                                <Slider {...slickSettings}>
                                    <div>
                                        <img src={property.imageUrl} alt={property.Type} />
                                    </div>
                                </Slider>
                                <CardContent>
                                    <Typography variant="h6">{property.Type}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {property.Location}
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
            <div className="component_class">
                <Footer />
            </div>
    </>
  )
}


