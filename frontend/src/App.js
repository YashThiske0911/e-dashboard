
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element={<PrivateComponent />}>
        <Route path="/" element={<h1>Product listing component</h1>} />
        <Route path="/add" element={<h1>Add product component</h1>} />
        <Route path="/update" element={<h1>Update product component</h1>} />
        <Route path="/logout" element={<h1>Logout product component</h1>} />
        <Route path="/profile" element={<h1>Product product component</h1>} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
