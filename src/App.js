
import { Switch, Route } from 'react-router';
import { useSelector } from 'react-redux';

import HomePage from './components/HomePage';
import VendorPage from './components/VendorPage';

import './App.css';

function App() {
  
  
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/vendors/:id">
        <VendorPage />
      </Route>
   </Switch>
  );
}

export default App;
