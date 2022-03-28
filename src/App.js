
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Posts from './components/Posts/Posts';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import LoginComponent from './components/LoginComponent';
import Post from './components/Post';
import Page404 from './components/Page404';
import About from './components/About';
import Contact from './components/Contact';
import HOC from './components/HOC';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/about" element={<HOC component={About}/>} />
          <Route path="/contact" element={<HOC component={Contact}/>} />
          <Route path='/post/:id' element={<Post />}  />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
