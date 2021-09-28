import React, {useContext} from 'react';
import {Context} from "../../index";
import {Container, Nav, Navbar} from "react-bootstrap";
import s from "../NavBar/NavBar.module.css";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link className={s.Logo} to={SHOP_ROUTE}>
                    <img src='https://t4.ftcdn.net/jpg/03/31/49/65/360_F_331496527_JFos59OitQmV5elMTVVAJUDbcunXk4Ht.jpg'
                         alt='logo' className={s.LogoImg}/>
                    <div className={s.LogoTitle}>
                        <h5>Kudos</h5>
                    </div>
                </Link>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} className={s.Button}>Admin</Button>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} className="ml-2">Logout</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;