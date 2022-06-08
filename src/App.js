import { Routes ,Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

const shop = () => {
  return(
    <h1>shop page</h1>
  )
};
const signup = () => {
  return(
    <h1>sign up page</h1>
  )
};
const cart = () => {
  return(
    <h1>cart</h1>
  )
};

const App = () => {

  return(
    <Routes>
      <Route path='/' element = {<Navigation/>}>

      <Route index element = {<Home/>} />
      <Route path='shop' element = {<shop/>} />
      <Route path='signup' element = { <sigup/>} /> 
      <Route path='cart' element = {<cart/>} />


      </Route>
        
      
      

    </Routes> 
   
  )

}

export default App;