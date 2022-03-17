//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount'


let stock = 5
const initial = 1



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <ItemListContainer />
      <ItemCount stock={stock} initial={initial} />
        </header>
      
    </div>
  );
}

export default App;
