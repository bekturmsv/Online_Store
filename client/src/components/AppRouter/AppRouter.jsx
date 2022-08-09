import React from 'react';
import {Switch,Route, Redirect, Router} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../../routes';
import { SHOP_ROUTE } from '../../utils/Consts';


const AppRouter = () => {
    const isAuth = true
    return (
        <Switch>
            {isAuth && authRoutes.map(({path,Component}) =>
                <Route key ={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path,Component}) =>
                <Route key ={path} path={path} component={Component} exact/>
            )}
            <Redirect to ={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;