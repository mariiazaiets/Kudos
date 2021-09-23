import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Row} from "react-bootstrap";
import s from "./BrandBar.module.css";

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <div>
            <Row className="d-flex">
                {device.brands.map(brand =>
                    <Card
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        key={brand.id}
                        className={s.brandItem}>
                        {brand.name}
                    </Card>
                )}
            </Row>
        </div>
    );
});

export default BrandBar;