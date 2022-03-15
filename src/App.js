//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <ItemListContainer />
      <clicktraker />
        </header>
      
    </div>
  );
}

export default App;
