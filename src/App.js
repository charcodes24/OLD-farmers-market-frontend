
import { Switch, Route } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { stayLoggedIn } from './features/signup/customerSlice';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import VendorPage from './components/VendorPage';
import CustomerSignUp from './components/CustomerSignUp';
import CustomerLogin from './components/CustomerLogIn';
import Cart from './components/Cart';

function App() {
  // const customer = useSelector(state => state.customer.customer)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("/me").then((res) => {
  //     if (res.ok) {
  //       res.json().then((customer) => dispatch(stayLoggedIn(customer)))
  //     }
  //   })
  // }, []);

  // console.log('CUSTOMER', customer)
  
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/vendors/:id">
          <VendorPage />
        </Route>
        <Route path="/signup">
          <CustomerSignUp />
        </Route>
        <Route path="/login">
          <CustomerLogin />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
