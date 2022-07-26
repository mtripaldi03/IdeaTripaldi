import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
function App() {
  const onAddItem = (count) => {
   
    ;
  };
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route index element={<ItemListContainer />} />
    <Route path="item/:id" element={<ItemDetailContainer />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

