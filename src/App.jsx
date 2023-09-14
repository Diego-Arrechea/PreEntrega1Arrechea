import Navbar from './components/navbar.js';
import ItemListContainer from './components/itemlistcontainer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido, aqui podras comprar tus prendas para que lleguen a la puerta de su casa." />
    </div>
  );
}

export default App;
