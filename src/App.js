import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router> 
    </>
  );
}

export default App;
