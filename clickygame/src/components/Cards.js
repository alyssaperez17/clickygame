import React from 'react';

const Card = props => (
<div className="col-md-3">
    <div className="col-mb-5">
    <img className="card-img-top" src={props.src} alt={props.alt} onClick={props.handleClick} id={props.id}/>
    <h1> Hey yall </h1>
    </div>

</div>

)

export default Card;
