import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './components/Authentication/LogIn';
import SignUp from './components/Authentication/SignUp';
import Profile from './components/Profile/Profile';
import Home from './components/home/Home';
import Followers from './components/Followers/Followers';
import { useSelector } from 'react-redux';
import Search from './components/Search/Search';

function App() {

  const user = useSelector((state) => state.authReducer.authData)

  return (
    <Router>
      <div className="App">
        <div className="blur" style={{ top: "-18%", right: "0" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
        <Routes>
          <Route path='/' element={user ? <Home /> : <LogIn />} />
          <Route path='/home' element={user ? <Home /> : <LogIn />} />
          <Route path='/login' element={user ? <Home /> : <LogIn />} />
          <Route path='/signup' element={user ? <Home /> : <SignUp />} />
          <Route path='/profile/:id' element={user ? <Profile /> : <LogIn />} />
          <Route path='/search' element={user ? <Search /> : <LogIn />} />
          <Route path='/profile/followers/:id' element={user ? <Followers /> : <LogIn />} />
          <Route path='/profile/following/:id' element={user ? <Followers /> : <LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
