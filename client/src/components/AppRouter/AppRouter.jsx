import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Switch, Route, Redirect, BrowserRouter, useHistory } from 'react-router-dom'
import { Context } from '../..';
import { check } from '../../http/userAPI';
import { authRoutes, publicRoutes } from '../../routes';
import { SHOP_ROUTE } from '../../utils/Consts';
import NavBar from '../NavBar/NavBar';


const AppRouter =  () => {
    const { user } = useContext(Context)
    
    return (
        <>
            <NavBar />
            <div>
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
        </>
    );
};

export default AppRouter;