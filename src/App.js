import logo from './logo.svg';
import './App.css';
import './componentes/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';

function App() {
  return (
    <div id="myDiv">
      <Navbar texto1="Start Bootstrap" texto2="Home" texto3="About" texto4="Services" texto5="Contact"/>
      <Footer texto6="Copyright your Website 2019"/>
    </div>
    
  );
}



export default App;
