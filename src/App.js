//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemsList from './Components/ItemsList';



//let stock = 5
//const initial = 1



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <ItemListContainer />
      <ItemsList />
      
        
      
    </div>
  );
}

export default App;
