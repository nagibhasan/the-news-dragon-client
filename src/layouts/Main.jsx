import React from 'react';
import Header from '../pages/Home/Home/Header';
import Footer from '../pages/Home/Home/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                    
                    </Col>
                    <Col lg={6}>
                        <h2>Main Content Coming</h2>
                    </Col>
                    <Col lg={3}>
                    
                    </Col>
                </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;