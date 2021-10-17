import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import Register from './Components/Register/Register';
import Shipping from './Components/Shipping/Shipping';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivareRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route exact path="/checkout">
              <Checkout></Checkout>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/logout">
              <Logout></Logout>
            </Route>
          </Switch>
        </Router>
        </AuthProvider>
      
     
    </div>
  );
}

export default App;
