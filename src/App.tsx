import { Route, Routes } from 'react-router-dom'
import './globals.css'
import SignInForm from './_auth/forms/SignInForm'
import Home from './_root/pages/Home'

const App = () => {
  return (
  <main className='flex h-screen'>
    <Routes>

      {/* Public routes*/}

      <Route path ="/sign-in" element = {<SignInForm />} />


      {/* Private routes*/}

      <Route index element={<Home/>} />
      
    </Routes>

  </main>
  
  )
}

export default App