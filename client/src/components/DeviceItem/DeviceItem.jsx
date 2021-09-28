import React from "react";
import {Card, Col, Image} from "react-bootstrap";
import s from "./DeviceItem.module.css";

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card className={s.Card}>
                <Image className={s.CardImage} src={device.img}/>
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div className={s.BrandName}>Samsung...</div>
                    <div>
                        <div>{device.rating} &#9733;</div>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;