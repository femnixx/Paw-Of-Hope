import './App.css'
import SignUp from './frontend/SignUp'
import LandingPage from './frontend/LandingPage'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import SignIn from './frontend/SignIn'

function App() {

  return (
    <>
     <BrowserRouter>
        
       <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/' element={<LandingPage />}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
