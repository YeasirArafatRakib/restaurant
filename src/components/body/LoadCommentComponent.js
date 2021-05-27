import React from 'react';
import dateformat from 'dateformat';

const LoadCommentComponent=props=>{
    return (
        props.comments.map(comment=>{
            return(
            <div key={comment.id}>
                <h5 style={{ color:"lightblue"}}>{comment.author}</h5>
                <p>{comment.comment}</p>
                <p>{comment.rating} | {dateformat(comment.date,"dddd,mmmm dS, yyyy, h:MM TT")}</p>
            </div>
            );
        })
    );
}

export default LoadCommentComponent;
