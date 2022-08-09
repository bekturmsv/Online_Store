import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Card, Col, Container, Form, Row, } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/Consts';
import module from './Auth.module.css'

const Auth = observer( () => {

    const location = useLocation()
    const  isLogin = location.pathname === LOGIN_ROUTE ? true : false
    console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация" } </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                    />
                    <Row className = "mt-3 d-flex justify-content-between pl-3 pr-3">
                        {
                            isLogin ?
                        <div style={{width:"60%"}}>
                            Нет аккаунта? <a href={REGISTRATION_ROUTE} >Зарегистрируйтесь!</a>
                        </div>
                        :
                        <div style={{width:"60%"}}>
                            Есть аккаунт? <a href={LOGIN_ROUTE}>Войдите!</a>
                        </div>
                        }
                        
                        <Button
                        style={{width:"30%"}}
                            className="mt-3 align-self-end"
                            variant={"outline-success"}
                        >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;