
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/basket/Basket';
import Favorites from './components/favorites/Favorites';
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </div>
  );
}

export default App;
