import './App.css';
import List from '../src/component/listpage/list'
import {Route,Routes} from "react-router-dom"
import Lorry from './component/Screens/Lorry';
import Truck from './component/Screens/Truck';
import Van from './component/Screens/Van';
import UpdateLorry from './component/Screens/Update/Update';
import NavBar from './component/navbar/navbar.js'

function App() {
  return (
    <div className="App">
     <NavBar/>
      <Routes>
        <Route path='/' element={<List/>}></Route>
        <Route path='/Lorry' element={<Lorry/>}></Route>
        <Route path='/Lorryupdate/:id' element={<UpdateLorry/>}></Route>
        <Route path='/Truck' element={<Truck/>}></Route>
        <Route path='/Van' element={<Van/>}></Route>
      </Routes>
 
    </div>
  );
}

export default App;
