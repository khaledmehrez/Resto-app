import React, { Component } from 'react';
import NavbarGuest from '../CommunComponent/NavbarGuest';
import Home from '../CommunComponent/Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {navGuestData} from "./propsGuest"
class AppGuest extends Component {
    
    
    render() {
        return (
            <div>
            <NavbarGuest links={navGuestData} sign={<div ><SignIn />
                                                                                  <SignUp />
                                                                                  </div>}/>
            <Home />
            
            </div>
        );
    }
}

export default AppGuest;