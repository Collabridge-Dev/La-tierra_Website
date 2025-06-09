import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Studioz from './pages/Studioz'
import ProjectDetails from './pages/ProjectDetails'
import Upcoming from './pages/Upcoming'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
// import Studioz from './studioz/Studioz.html'
// import Studioz form './Studioz/index'
import{BrowserRouter , Routes , Route } from 'react-router-dom'
/* import Projects from './Pages/Projects' */
function App() {
  
  return (
  <div>
    {/* <Router> */}
    <Header/>
      <BrowserRouter>
    {  <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/about' element ={<About/>}/>
      <Route path = '/project' element ={<Project/>}/>
      <Route path = '/contact' element ={<Contact/>}/>
      <Route path = '/studioz' element ={<Studioz/>} />
      <Route path = '/projectdetails' element ={<ProjectDetails/>} />
      <Route path = '/upcoming' element ={<Upcoming/>} />
    </Routes> }
    </BrowserRouter>
    <Footer/>
    {/* </Router> */}


  </div>
  )
}

export default App