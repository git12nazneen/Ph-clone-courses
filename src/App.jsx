
import './App.css'
import Navbar from './Components/Navabr/Navbar'
import Welcome from './Components/Welcome/Welcome'
import Courses from './Pages/Courses/Courses'

function App() {
 

  return (
    <>
    <div className='container mx-auto '>
        <Navbar></Navbar>
        <Welcome></Welcome>
        <Courses></Courses>
    </div>
    </>
  )
}

export default App
