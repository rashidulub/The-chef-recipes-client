
import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';


const VewRecipesLayoutes = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={2}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={8}>

                        <Outlet></Outlet>
                    </Col>
                    <Col lg={2}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default VewRecipesLayoutes;