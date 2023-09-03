import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
