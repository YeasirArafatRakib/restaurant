import React from 'react';
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuComponent';
import ContactComponent from './ContactComponent';
import AboutComponent from './AboutComponent';
import {Route} from 'react-router-dom';


const BodyComponent = ()=>{
    return (
        <div>
            
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/menu" exact component={MenuComponent}/>
            <Route path="/contact" exact component={ContactComponent}/>
            <Route path="/about" exact component={AboutComponent}/>
            
        </div>
    );
}

export default BodyComponent;