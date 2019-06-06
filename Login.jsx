import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
// import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import Auth from '../auth/Auth'
import Logo from '../components/template/Logo'
import UserCrud from '../user/UserCrud';
// import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className='app'>
            <Logo />
            <aside className="menu-area">
                <nav className="menu">
                </nav>
            </aside>
            <Switch>
                <Route exact path='/' component={Auth} />
                <Route path='/membros' component={UserCrud} />
                {/* <Redirect from='*' to='/' /> */}
            </Switch>
            {/* <Footer />  */}
        </div>
    </BrowserRouter>
    (
        // <Router history={hashHistory}>
        //     <Route path='/' component={Auth} >
        //         <IndexRoute component={App} />
        //         <Route path='membros' component={UserCrud} />
        //     </Route>
        //     <Redirect from='*' to='/' />
        // </Router>
    )
    
