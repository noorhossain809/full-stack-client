import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Item from '../Item/Item';

const Home = () => {

     const [items, setItems] = useState([]);
     const [loading, setLoading] = useState(true)

     useEffect(() => {
         fetch('https://aqueous-gorge-46152.herokuapp.com/items')
         .then(res => res.json())
         .then(data => {
             setItems(data)
             setLoading(false);
            })
     }, [])

    return (
        <div className="row">
                {
                    loading ?  <Button style={{justifyContent:'center'}} variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>:
                    items.map(item => <Item item={item}></Item>)
                }
        </div>
    );
};

export default Home;