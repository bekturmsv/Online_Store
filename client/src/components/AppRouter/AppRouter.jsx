import { createBrowserHistory } from 'history';
import React from 'react';
import { useContext } from 'react';
import { Switch, Route, Redirect,    BrowserRouter, useHistory } from 'react-router-dom'
import { Context } from '../..';
import { authRoutes, publicRoutes } from '../../routes';
import { SHOP_ROUTE } from '../../utils/Consts';
import NavBar from '../NavBar/NavBar';


const AppRouter = () => {
    const { user } = useContext(Context)
    console.log(user);
    return (
    
            <div>
            <NavBar />
                <Switch>
                    {user.isAuth && authRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} component={Component} exact />
                    )}
                    {publicRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} component={Component} exact />
                    )}
                    <Redirect to={SHOP_ROUTE} />
                </Switch>
            </div>
    );
};

export default AppRouter;