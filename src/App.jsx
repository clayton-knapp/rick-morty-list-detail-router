import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import List from './views/List';
import Detail from './views/Detail';
import './App.css';



export default function App() {
  return (
    <main>
      <Switch>
        {/* <Route path="/character/:id">
          <h2>Character Detail</h2>
          <Detail />
        </Route> */}
        <Route path="/character">
          <h2>Rick & Morty Characters!</h2>
          <List />
        </Route>
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>  
    </main>
  );
}
