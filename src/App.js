import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      {/*This is how it done in v6
      <Route path='/' element={<Home/>}/>*/}
      <PrivateRoute exact path='/' component={Home}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
