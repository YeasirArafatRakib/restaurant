import React from 'react';
import {Card, CardBody,CardTitle,CardImg,CardText} from 'reactstrap';
import LoadCommentComponent from './LoadCommentComponent';

const DishDetailComponent = (props)=>{
    return(
        <div>
            <Card style={{ margin:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>

                        <p>{props.dish.description}</p>
                        <p>BDT: {props.dish.price}-</p>
                        <hr/>
                        <LoadCommentComponent  comments={props.dish.comments} />
                        
                    </CardText>
                </CardBody>

            </Card>
        </div>
    );
}

export default DishDetailComponent;