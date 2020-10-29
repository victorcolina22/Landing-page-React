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
import MyJumbotron from './componentes/MyJumbotron';
import MyCard from './componentes/MyCard';

function App() {
  return (
    <>
      <Navbar texto1="Start Bootstrap" texto2="Home" texto3="About" texto4="Services" texto5="Contact" />
      <div className="container">
        <MyJumbotron
          title="Welcome to react"
          description="React is the most popular rendering library in the world"
          buttonLabel="Go to the official website"
          buttonURL="https://reactjs.org/"
        />,
      <div className="row">
          <MyCard />
        </div>
      </div>
      <Footer texto6="Copyright your Website 2019" />
    </>

  );
}



export default App;
