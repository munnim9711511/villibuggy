
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Booking } from './Components/Booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Booking/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
