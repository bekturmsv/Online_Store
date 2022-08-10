import React, { useContext } from 'react';
import { Context } from '../..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/Consts';
import module from "./NavBar.module.css"
import {observer} from 'mobx-react-lite'
import { useHistory,useLocation, withRouter } from 'react-router-dom';


const NavBar = observer (() => {
    const {user} = useContext(Context)
    let history = useHistory()
    return (

    <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className={module.brand} to = {SHOP_ROUTE}>КупиДевайс</NavLink>
          {user.isAuth ? 
          <Nav className={module.navItems} >
            <Button variant={"outline-light"} onClick={()=>history.push(LOGIN_ROUTE)}>Выйти</Button>
            <Button variant={"outline-light"} onClick={()=>history.push(ADMIN_ROUTE)}>Админ панель</Button>
          </Nav>
          :
          <Nav className={module.navItems} >
            <Button variant={"outline-light"} onClick={()=>{
              user.setIsAuth(true)
            }} >Авторизация</Button>
          </Nav>
}
        </Container>
      </Navbar>
  );
});

export default NavBar;