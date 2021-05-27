import React, {Component} from 'react';

import DISHES from '../../data/dishes';
import MenuItemComponent  from './MenuItemComponent';
import DishDetailComponent from './DishDetailComponent';


class MenuComponent extends Component{
    state={
        dishes:DISHES,
        selectedDish:null
    }


    onDishSelect= dish=>{
        console.log(dish);
        this.setState({selectedDish:dish});
    }

    render(){
        const menu = this.state.dishes.map(item=>{
            return(
                <MenuItemComponent 
                dish={item} 
                key={item.id}
                DishSelect={()=>this.onDishSelect(item)}
                />
            );
        })

        let dishDetail = null;
        if(this.state.selectedDish !=null){
            dishDetail = <DishDetailComponent dish={this.state.selectedDish}/>
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {menu}
                    </div>
                    <div className="col-8">
                        {dishDetail}
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuComponent;