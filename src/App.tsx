

import { Route,Routes } from 'react-router-dom'
import Home from '../src/Pages/Home'
import Navbar from './components/Navbar'
import { LoginForm } from './components/ui/login-form'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import FAQ from './components/FAQ'
import Contact from './Pages/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <div className='pt-16'>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/contact' element={<Contact />} />

      </Routes>
       <Footer />
    </div>
    
      
    </>
  )
}

export default App
