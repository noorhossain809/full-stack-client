import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import { createContext, useState } from 'react';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrdersCheckOut from './components/OrdersCheckOut/OrdersCheckOut';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/buy-product/:id">
          <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/addEvent">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <OrdersCheckOut></OrdersCheckOut>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
