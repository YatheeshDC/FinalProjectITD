import './App.css';
import Home from './screens/home';
import Home2 from './screens/home2';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserLogin from './screens/userLogin';
import UserSignup from './screens/userSignup';
import Profiledetail from './screens/pdetail';
import ListProduct from './components/backfetch';
import AddProduct from './components/postproperty2';
import Buyproducts from './components/buyproducts';

// import {Browser Router}

function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* <Route path='/'> */}
            <Route path='*'element={<Home/>}/>
            <Route path='/more'element={<Home2/>}/>
            <Route path='/Login' element={<UserLogin/>}/>
            <Route path='/Signup' element={<UserSignup/>}/>
            <Route path='/pdetail' element={<Profiledetail/>}/>
            <Route path='/backfetch' element={<ListProduct/>}/>
            <Route path='/Sign' element={<AddProduct/>}/>
            <Route path='/ready' element={<Buyproducts/>}/>



          {/* </Route> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
