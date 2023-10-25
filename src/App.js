import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Sidebar from './components/Sidebar';



function App() {
  return ( 
  <div className='App'>
     <Header firstName ="Anna"/> 
     <Header firstName ="Any name other than Bob" color ="red"/> 
     <Nav first = "help"/>
     <Promo heading = "this is the promo" promoSubHeading = "this is the promo sub heading"/>
      <Sidebar/>
  </div> 

  )

}

export default App;
