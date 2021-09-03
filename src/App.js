import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './components/HomePage';
import VendorPage from './components/VendorPage';

import './App.css';

function App() {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
      fetch("/vendors")
        .then((res) => res.json())
        .then((data) => setVendors(data));
    }, []);
  
  return (
    <Switch>
      <Route exact path="/">
        <HomePage vendors={vendors}/>
      </Route>
      <Route path="/vendors/:name">
        <VendorPage vendors={vendors}/>
      </Route>
   </Switch>
  );
}

export default App;
