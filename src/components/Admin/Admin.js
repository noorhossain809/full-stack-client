import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

  const onSubmit = data => {
      const eventData = {
          name: data.name,
          imageURL: imageURL,
          price: data.price
      };
      const url = `https://aqueous-gorge-46152.herokuapp.com/addEvent`
    //   console.log(eventData)
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res))
    };

  const handleUploadImage = event => {
      console.log(event.target.files)
      const imageData = new FormData();
      imageData.set('key', 'afaad3e78436652cfd5df00181d208f4');
      imageData.append('image', event.target.files[0])

      axios.post('https://api.imgbb.com/1/upload',
       imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (

        <div className="row" style={{margin:'50px'}}>
          <div className="col-md-3" style={{backgroundColor:'darkcyan'}}>
            <div style={{textAlign:'center'}}>
              <h4>Gents Collection</h4>
              
              <br/>
            <Button><FontAwesomeIcon icon={faPlusCircle} /> Add Product</Button>
            </div>
            
          </div>
          <div className="col-md-9">
          <form onSubmit={handleSubmit(onSubmit)}>
         <h1>Add Product</h1>     
    <input name="name" defaultValue="New exciting event" ref={register} />
    <br/>
    <h2>Add Price</h2>
    <input name="price" type="number" defaultValue="New exciting event" ref={register} />

    <br/>
      <h2>Add Photo</h2>
      <input name="exampleRequired" type="file" onChange={handleUploadImage} />
      <br/>
      <input type="submit" />
    </form>
          </div>

      
        </div>
    );
};

export default Admin;