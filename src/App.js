import { Switch, Route } from 'react-router';

import HomePage from './components/HomePage';
import VendorPage from './components/VendorPage';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/vendors/:name">
        <VendorPage />
      </Route>
   </Switch>
  );
}

export default App;
