import React, {Component} from 'react';
import {CardColumns,Modal,ModalBody,ModalFooter,Button} from 'reactstrap';

import DISHES from '../../data/dishes';
import MenuItemComponent  from './MenuItemComponent';
import DishDetailComponent from './DishDetailComponent';


class MenuComponent extends Component{
    state={
        dishes:DISHES,
        selectedDish:null,
        modalOpen:false
    }



    onDishSelect= dish=>{
        this.setState({
            selectedDish:dish,
            modalOpen: !this.state.modalOpen
        });
    }
    toggleModal=()=>{
        this.setState({
            modalOpen: !this.state.modalOpen
        });
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
                    <CardColumns>{menu}</CardColumns>
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalBody>
                        {dishDetail}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="Secondary" onClick={this.toggleModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default MenuComponent;