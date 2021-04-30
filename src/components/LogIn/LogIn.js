import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    
    const { from } = location.state || { from: { pathname: "/" } };
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
    
    history.replace(from);

  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
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