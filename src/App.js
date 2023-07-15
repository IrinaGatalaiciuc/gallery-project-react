import Gallery from './pages/Gallery';
import './App.css';
import {Context} from './context/Context';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Context>
        <Gallery />
      </Context>
      <Footer />
    </div>
  );
}

export default App;
