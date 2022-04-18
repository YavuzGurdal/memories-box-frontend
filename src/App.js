import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import CreateScreen from './Screens/CreateScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/create' element={<CreateScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
