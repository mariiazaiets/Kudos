import React from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import s from "./AboutDevice.module.css";

const AboutDevice = () => {
    const device = {id: 1, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://www.ixbt.com/img/n1/news/2021/8/0/swappie-product-iphone-12-black_large.png'};
    const description = [
        {id: 1, title: 'Processor', description: 'Pentium 3'},
        {id: 2, title: 'Camera', description: '12 mp'},
        {id: 3, title: 'RAM', description: '5 gb'},
        {id: 4, title: 'Number of cores', description: '2'},
        {id: 5, title: 'Battery', description: '4000'},
    ];
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image className={s.AboutDevice_Img} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div className={s.AboutDevice_Rating}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className={s.AboutDevice_Price}>
                        <h3>From: {device.price} UAH</h3>
                        <Button variant={"outline-dark"}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-3">
                <h2 className="d-flex align-items-start mb-3">Features:</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent'}} className="p-1">
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default AboutDevice;