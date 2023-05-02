
import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';


const VewRecipesLayoutes = () => {
    return (
        <Container  className='mt-5'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default VewRecipesLayoutes;