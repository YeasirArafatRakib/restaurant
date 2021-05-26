import React, {Component} from 'react';

import DISHES from '../../data/dishes';
import MenuItemComponent  from './MenuItemComponent';

class MenuComponent extends Component{
    state={
        dishes:DISHES
    }
    render(){
        const menu = this.state.dishes.map(item=>{
            return(
                <MenuItemComponent dish={item} key={item.id}/>
            );
        })
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuComponent;