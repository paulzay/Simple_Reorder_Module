
import './App.css';
import ProductList from './components/ProductList';
import SideBar from './components/Sidebar';
import Warehouse from './components/Warehouse';

function App() {
  return (
    <div className="">
      <h2 className='title'>Kefis</h2>
     <SideBar> 
       <div label="Store"> 
         <ProductList />
       </div> 
       <div label="Warehouse"> 
         <Warehouse />
       </div> 
     </SideBar> 
    </div>
  );
}

export default App;
