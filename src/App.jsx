import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import List from './views/List';
import Detail from './views/List';
import './App.css';



export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='character/:id'>
          <h2>Character Detail</h2>
          <Detail />
        </Route>
        <Route path='/'>
          <h2>Rick & Morty Characters!</h2>
          <List />
        </Route>
      </Switch>  
    </Router>
  );
}
