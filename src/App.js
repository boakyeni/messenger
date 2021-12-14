import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      {/*This is how it done in v6
      <Route path='/' element={<Home/>}/>*/}
      <Route exact path='/' component={Home}/>
      <Route exact path='/register' component={Register}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
