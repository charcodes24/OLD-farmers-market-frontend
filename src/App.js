
import { Switch, Route } from 'react-router';
import { useSelector } from 'react-redux';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import VendorPage from './components/VendorPage';
import CustomerSignUp from './components/CustomerSignUp';
import Cart from './components/Cart';

function App() {
  
  
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
