import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import NavigationBar from './Components/NavigationBar/NavigationBar';

// Pages
import HomePage from './Pages/HomePage/HomePage';
import BlogPage from './Pages/BlogPage/BlogPage';
import GearPage from './Pages/GearPage/GearPage';
import PhotosPage from './Pages/PhotosPage/PhotosPage';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/blog' element={<BlogPage/>}></Route>
        <Route path='/gear' element={<GearPage/>}></Route>
        <Route path='/photos' element={<PhotosPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
