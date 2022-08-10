import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import { Card, Row } from 'react-bootstrap';
import {Context} from '../../index'

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className='d-flex'  style={{display:"flex",justifyContent:"space-around"}}>
            {device.brands.map(brand => 
                <Card 
                style={{cursor:"pointer", width:"25%"}}
                className = "p-3 "
                key={brand.id} 
                onClick={()=>device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
                )}
        </Row>
    );
});

export default BrandBar;