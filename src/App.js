
import { Switch, Route, Redirect } from 'react-router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { customerLogin } from './features/customer/customerSlice';
import { vendorLogin } from './features/vendor/vendorSlice';
import { logIn } from './features/login/loginSlice';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import VendorPage from './components/VendorPage';
import SignUp from './components/SignUp';
import VendorSignUp from './components/VendorSignUp';
import Login from './components/Login';
import Cart from './components/Cart';
import VendorHomePage from './components/VendorHomePage';
import AddItem from './components/AddItem';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {
  const customerLoggedIn = useSelector((state) => state.allusers.customerLoggedIn);
  const vendorLoggedIn = useSelector((state) => state.allusers.vendorLoggedIn);
  const dispatch = useDispatch();
  const [cart, setCart] = useState(cartFromLocalStorage)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    fetch("/loggedin").then((res) => {
      if (res.ok) {
        res.json().then((user) => dispatch(logIn(user)))
      } 
    })
  }, [cart]);

  console.log(cart)

  function addItemToCart(newItem) {
    const existingItem = cart.find(item => item.id === newItem.id)
    if (!existingItem) {
      setCart((mostUpdatedCart) => [...mostUpdatedCart, {id: newItem.id, name: newItem.name, price: newItem.price, quantity: 1}])
    } else {
      existingItem.quantity++
    }
  }

  function removeItem(id) {
    let updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  function clearCart() {
    setCart([])
  }
  
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/vendors/:id">
          <VendorPage addItemToCart={addItemToCart}/>
        </Route>
        <Route path="/signup">
          {customerLoggedIn || vendorLoggedIn ? <Redirect to="/" /> : <SignUp />}
        </Route>
        <Route path="/login">
          {customerLoggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/vendor_signup">
          {vendorLoggedIn ? (
            <Redirect to="/vendor_homepage" />
          ) : (
            <VendorSignUp />
          )}
        </Route>
        <Route path="/cart">
          <Cart cart={cart} removeItem={removeItem} clearCart={clearCart}/>
        </Route>
        <Route path="/vendor_signup">
          <VendorSignUp />
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
