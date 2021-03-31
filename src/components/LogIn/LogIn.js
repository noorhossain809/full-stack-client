import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../App';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    var provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    const {email} = result.user;
    const signedInUser = {email};
    setLoggedInUser(signedInUser);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div>
            <h2>This is log in page</h2>
            <Button onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGooglePlusG} /> Continue With Google</Button>
        </div>
    );
};

export default LogIn;