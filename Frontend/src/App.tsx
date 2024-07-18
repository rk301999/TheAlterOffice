
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import toast,{Toaster} from 'react-hot-toast'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  )
}

export default App
