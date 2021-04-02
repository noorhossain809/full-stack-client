import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        fetch(`https://aqueous-gorge-46152.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => setSelected(data))
    }, [id]);

    const history = useHistory()
    const handleCheckout = () => {
        const newAdd = { email: loggedInUser.email, ...selected, date: new Date() };
        console.log(newAdd)
        fetch('https://aqueous-gorge-46152.herokuapp.com/newChecking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAdd)
        })
        .then(res => console.log('Added Order'))
           history.push('/checkout')
    }
    return (
        <div style={{ margin: '100px' }}>
            <h2>Checkout</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{selected?.name}</td>
                        <td>1</td>
                        <td>$ {selected?.price}</td>
                        <th>{loggedInUser.email}</th>
                    </tr>
                    <tr>

                        <td>Total</td>
                        <td>1</td>
                        <td>$ {selected?.price}</td>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={handleCheckout} variant="success">Check Out</Button>
        </div>
    );
};

export default Order;