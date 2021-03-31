import React from 'react';
import Item from '../Item/Item';


const items =[
    {
        name: 'Panjabi',
        pic: 'eidCollection.png',
        price: '50'
    },
    {
        name: 'Panjabi',
        pic: 'panjabi.png',
        price: '134'
    },
    {
        name: 'Gents Shirt',
        pic: 'gentsShirt.png',
        price: '46'
    },
    {
        name: 'Gents Pant',
        pic: 'gentsPant.png',
        price: '60'
    },
    {
        name: 'Watch',
        pic: 'analogWatch.png',
        price: '120'
    },
    {
        name: 'Clock',
        pic: 'clock.png',
        price: '70'
    },
    {
        name: 'Gents Park',
        pic: 'gentsPark.png',
        price: '100'
    },
    {
        name: 'Gents',
        pic: 'gentsCollection.png',
        price: '80'
    },
    {
        name: 'T-Shirt',
        pic: 't-shirt.png',
        price: '35'
    },
    {
        name: 'Shirt',
        pic: 'shirt.png',
        price: '30'
    }
    

]

const Home = () => {
    return (
        <div className="row">
                {
                    items.map(item => <Item item={item}></Item>)
                }
        </div>
    );
};

export default Home;