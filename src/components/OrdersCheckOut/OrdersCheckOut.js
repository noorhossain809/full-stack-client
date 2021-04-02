import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const OrdersCheckOut = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://aqueous-gorge-46152.herokuapp.com/bookings?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

    const deleteEvent = id => {
         fetch(`https://aqueous-gorge-46152.herokuapp.com/deleteEvent/${id}`,{
             method: 'DELETE'
         })
         .then(res => res.json())
         .then(result => {
             console.log('deleted successfully')
         })
    }
    
    return (
        <div style={{textAlign:'center'}}>
            <h2>You have: {bookings.length} orders</h2>
               <div style={{border:'1px solid gray'}}>
               {
                bookings.map(book => <li>
                    <p>Email: {book.email}</p>
                    <h5>Name: {book.name}</h5>
                    <h6>Price: {book.price}</h6>
                     Date: {(new Date(book.date).toDateString('dd/MM/yyyy'))}
                     <Button onClick={() => deleteEvent(book._id)} style={{marginLeft:'5px'}} variant="danger"><FontAwesomeIcon icon={faTrash} /> Delete</Button>
                      </li>)
            }
               </div>
            
            
        </div>
    );
};

export default OrdersCheckOut;