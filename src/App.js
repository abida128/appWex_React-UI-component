// import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';

const App =() => {
  return (
    <>
     <div>
   <div style={{display:'flex',justifyContent:'center'}}>
   <Navbar/>
   </div>
     <HomePage/>
     </div>
     
    </>
  );
}

export default App;
