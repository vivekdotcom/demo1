import './App.css';
import Layout from './component/Layout/Layout';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import {
  BrowserRouter ,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >

        </Route>
      </Routes>
      </BrowserRouter>
      
      <Header />
      <Footer />
    </div>
  );
}

export default App;
