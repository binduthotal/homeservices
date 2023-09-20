import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routing from './components/Routing';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

   
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />

      {/* <Fetchdata/> */}

    </div>
  );
}

export default App;
