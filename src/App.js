
import { Switch, Route, Redirect } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { customerLogin } from './features/customer/customerSlice';
import { vendorLogin } from './features/vendor/vendorSlice';
import { logIn } from './features/allUsers/allUsersSlice';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import VendorPage from './components/VendorPage';
import CustomerSignUp from './components/SignUp';
import VendorSignUp from './components/VendorSignUp';
import CustomerLogin from './components/Login';
import Cart from './components/Cart';
import VendorHomePage from './components/VendorHomePage';
import AddItem from './components/AddItem';

function App() {
  const customer = useSelector(state => state.customer.customer)
  const vendor = useSelector(state => state.vendor.vendor)
  const customerLoggedIn = useSelector(state => state.customer.loggedIn)
  const vendorLoggedIn = useSelector(state => state.vendor.loggedIn)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/loggedin").then((res) => {
      if (res.ok) {
        res.json().then((user) => dispatch(logIn(user)))
      } 
    })
  }, []);

  console.log('CUSTOMER', customer)
  
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/vendors/:id">
          <VendorPage />
        </Route>
        <Route path="/signup">
          {customerLoggedIn ? <Redirect to="/" /> : <CustomerSignUp />}
        </Route>
        <Route path="/login">
          {customerLoggedIn ? <Redirect to="/" /> : <CustomerLogin />}
        </Route>
        <Route path="/vendor_signup">
          {vendorLoggedIn ? (
            <Redirect to="/vendor_homepage" />
          ) : (
            <VendorSignUp />
          )}
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/vendor_homepage">
          <VendorHomePage />
        </Route>
        <Route path="/add_item">
          <AddItem />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
