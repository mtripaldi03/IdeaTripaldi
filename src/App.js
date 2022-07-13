import logo from './logo.svg';
import './App.css';
import Test from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
  const onAddItem = (count) => {

  };
  return (
    <>
    <Test/>
    <ItemListContainer greeting="Bienvenido a la tienda"/>
    <ItemCount onAdd={onAddItem}/>
    </>
  );
}

export default App;

