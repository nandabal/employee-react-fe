
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Main from './components/main'
import EmployeeForm from './components/EmployeeForm'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main child={<Home/>}/>}/>
        <Route path='/form' element={<Main child={<EmployeeForm/>}/>}/>
      </Routes>
    </>
  )
}

export default App
