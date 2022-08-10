import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../../components/BrandBar/BrandBar';
import DeviceList from '../../components/DeviceList/DeviceList';
import TypeBar from '../../components/TypeBar/TypeBar';

const Shop = () => {
    return (
        <Container className ="mt-3" >
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;