import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import {Context} from "../../index";
import s from "./TypeBar.module.css";

const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    className={s.typeItem}
                    onClick={() => device.setSelectedType(type)}
                    active={type.id === device.selectedType.id}
                    key={type.id}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;