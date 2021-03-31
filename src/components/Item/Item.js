import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Item = ({item}) => {
    return (
        <div className="col-md-3">
            <div style={{margin:'30px', border:'1px solid gray'}}>
            <img style={{height:'180px', width:'100%'}} src={require(`../../images/${item.pic}`).default} alt=""/>
            <h3 style={{fontWeight:'400', marginLeft:'15px'}}>{item.name}</h3>
            <div className="d-flex" style={{margin:'10px'}}>
            <h5 style={{color:'green', fontWeight:'500'}}>${item.price}</h5>
            <Button style={{marginLeft:'100px'}} variant="primary"> BUY NOW <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
            </div>
            </div>
        </div>
    );
};

export default Item;