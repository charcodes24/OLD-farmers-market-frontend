import { Switch, Route } from 'react-router';

import HomePage from './components/HomePage';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
   </Switch>
  );
}

export default App;
