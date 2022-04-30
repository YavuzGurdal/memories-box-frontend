import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import CreateScreen from './Screens/CreateScreen';
import UpdateScreen from './Screens/UpdateScreen';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap'
import AuthScreen from './Screens/AuthScreen';




function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/create' element={<CreateScreen />} />
            <Route path='/update/:id' element={<UpdateScreen />} />
            <Route path='/auth' element={<AuthScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
