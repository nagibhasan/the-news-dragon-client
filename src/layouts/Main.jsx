import React from 'react';
import Header from '../pages/Home/Home/Header';
import Footer from '../pages/Home/Home/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../leftNav/LeftNav';
import RightNav from '../RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h2>Main Content Coming..</h2>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;