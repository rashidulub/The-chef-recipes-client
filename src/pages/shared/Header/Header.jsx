import React from 'react';
import cover from '../../../assets/HOW-TO-BECOME-A-CHEF.jpg'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    return (
        <Container className=''>
            <div className='text-center  mt-3' >
                <img style={{ height: '350px' }} className='w-100' src={cover} alt="" />
            </div>
            <h2 className='text-secondary text-center mt-2'>“Food is everything we are. ...</h2>
            <div className='d-flex mb-3 bg-light'>
                <Button className='text-center' variant="success">Health Tips</Button>
                <Marquee speed={120} className='text-primary '>
                    <h4>We live in a day and age when clinical innovations and medical breakthroughs occur regularly. We can live healthy lives than what a lot of our forefathers might even imagine. Yet, we locate a significant portion of the populace experiencing health issues and also conditions of one kind or another. Sadly, the majority of it could have been stayed clear of through healthy living habits. Many individuals adopt wrong behaviors that result in wellness issues. Right here are some beneficial suggestions to live a healthy and practical life.</h4>
                </Marquee>
            </div>
            <NavigationBar></NavigationBar>

        </Container>
    );
};

export default Header;