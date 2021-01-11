import {Route, Switch} from 'react-router';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PrivateRoute from './components/Shared/PrivateRoute'
// import Header from './components/Header/Header';
// import Main from './components/Main/Main';
// import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="register" component={Register} />
        <PrivateRoute path="*" component={Home} />
      </Switch>
      {/* <NavBar/>
      <Header/>
      <Main/> */}
    </div>
  );
}

export default App;
