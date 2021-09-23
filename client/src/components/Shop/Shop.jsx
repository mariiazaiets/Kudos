import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../TypeBar/TypeBar";
import BrandBar from "../BrandBar/BrandBar";

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md={3} className="mt-2">
                    <TypeBar/>
                </Col>
                <Col md={9} className="mt-2">
                    <BrandBar/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;