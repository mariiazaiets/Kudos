import React from 'react';
import {Card, Container, Form, NavLink} from "react-bootstrap";
import s from "../Auth/Auth.module.css";
import {Button} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {Link, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center Auth-container"
            style={{height: window.innerHeight - 90}}>
            <Card className={s.AuthCard}>
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                {isLogin ?
                    <Form className="d-flex flex-column mt-4">
                        <Form.Control className="mt-2" placeholder="Email"/>
                        <Form.Control className="mt-2" placeholder="Password"/>
                        <Button className="mt-2" variant={"success"}>Log In</Button>
                        <p className="mt-2">Don't have an account yet?</p>
                        <Link to={REGISTRATION_ROUTE}>Sign Up</Link>
                    </Form>
                    :
                    <Form className="d-flex flex-column mt-4">
                        <Form.Control className="mt-2" placeholder="Email"/>
                        <Form.Control className="mt-2" placeholder="Password"/>
                        <Button className="mt-2" variant={"success"}>Sign Up</Button>
                        <p className="mt-2">You already have an account?</p>
                        <Link to={LOGIN_ROUTE}>Log In</Link>
                    </Form>
                }
            </Card>
        </Container>
    );
};

export default Auth;