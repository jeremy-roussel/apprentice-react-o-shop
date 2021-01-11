import {Route, Switch} from 'react-router';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PrivateRoute from './components/Shared/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="register" component={Register} />
        <PrivateRoute path="*" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
