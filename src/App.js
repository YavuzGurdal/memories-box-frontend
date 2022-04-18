import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import CreateScreen from './Screens/CreateScreen';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap'



function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/create' element={<CreateScreen />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
