import React, { Component } from 'react';
import NavbarGuest from './NavbarGuest';
import FoodList from './FoodList';
import Home from '../CommunComponent/Home';

class AppGuest extends Component {
    
    
    render() {
        return (
            <div>
            <NavbarGuest />
            <Home />
            
            </div>
        );
    }
}

export default AppGuest;