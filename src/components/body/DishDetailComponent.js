import React from 'react';
import {Card,CardHeader,CardBody,CardTitle,CardImg,CardText} from 'reactstrap';
import LoadCommentComponent from './LoadCommentComponent';

const DishDetailComponent = (props)=>{
    return(
        <div>
            <Card style={{ margin:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
                <CardHeader>
                <CardTitle>{props.dish.name}</CardTitle>
                </CardHeader>
                <CardBody style={{textAlign:"left"}}>
                    
                    <CardText>{props.dish.description}</CardText>
                    <CardText>BDT: {props.dish.price}-</CardText>
                    <hr/>
                    <LoadCommentComponent  comments={props.comments} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetailComponent;