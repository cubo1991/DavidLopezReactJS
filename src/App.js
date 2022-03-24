//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';



//let stock = 5
//const initial = 1



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <ItemListContainer />
      <ItemDetailContainer />
      
      
        
      
    </div>
  );
}

export default App;
