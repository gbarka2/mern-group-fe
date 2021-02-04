import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
// import components

function App() {


  return (
    <div className="App">
        <h1>TUNR.</h1>
      <h4>FOR ALL YOUR PLAYLIST NEEDS</h4>
      <hr />
      <main>
        <Switch>
          <Route 
            exact
            path='/'
            render={(rp) =>
              <div>
                <List label="PLAYLIST 1" />
                <List label="FAVORITE SONGS LIST" />
                <Form />
              </div>}>
          </Route>
        </Switch>
      </main>
    </div>
  );




}

export default App;
