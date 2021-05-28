import React from 'react';
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuComponent';
import ContactComponent from './ContactComponent';
import AboutComponent from './AboutComponent';
import {Route,Redirect, Switch} from 'react-router-dom';


const BodyComponent = ()=>{
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={HomeComponent}/>
                <Route path="/menu" exact component={MenuComponent}/>
                <Route path="/contact" exact component={ContactComponent}/>
                <Route path="/about" exact component={AboutComponent}/>
                <Redirect from="/" to="/home"/>
            </Switch>

            
        </div>
    );
}

export default BodyComponent;