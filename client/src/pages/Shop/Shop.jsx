import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '../..';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceApi';
import BrandBar from '../../components/BrandBar/BrandBar';
import DeviceList from '../../components/DeviceList/DeviceList';
import TypeBar from '../../components/TypeBar/TypeBar';

const Shop = observer( () => {

    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    },[])

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
});

export default Shop;