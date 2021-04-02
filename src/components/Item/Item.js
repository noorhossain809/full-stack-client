import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const history = useHistory();
    return (
        <div className="col-md-3">
            <div style={{margin:'30px', border:'1px solid gray'}}>
            <img style={{height:'180px', width:'100%'}} src={item.imageURL} alt=""/>
            <h3 style={{fontWeight:'400', marginLeft:'15px'}}>{item.name}</h3>
            <div className="d-flex" style={{margin:'10px'}}>
            <h5 style={{color:'green', fontWeight:'500'}}>${item.price}</h5>
            <Link to={"/buy-product/" + item._id} style={{marginLeft:'100px'}} variant="primary"> BUY NOW <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
            </div>
            </div>
        </div>
    );
};

export default Item;