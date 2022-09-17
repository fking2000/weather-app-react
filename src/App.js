import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <div className="App">
     <MainLayout>
       <Routes>
       <Route path="/" element={<HomePage/>}  ></Route>
       <Route path="/search" element={<Search/>} ></Route>
        <Route path="/saved" element={<Saved/>} ></Route>
     </Routes>
     </MainLayout>
    </div>
  );
}

export default App;
