import image from './grocery.jpg';
import image1 from './grocery2.jpg';
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
      
    <div className="container">
     <img src={image}  width='250px' alt="shopping" />
     </div>
     
     <div className="container">
     <h1 >Grocery List</h1>
     </div>
     
     <GroceryList />

     <div className="container">
     <img src={image1}  width='250px' alt="cart" />
     </div>
    
    </div>
  );
}

export default App;
