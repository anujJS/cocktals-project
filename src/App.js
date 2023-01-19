import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={ <Home/>}>
         
        </Route>
        <Route  path='/about' element={<About/>} >
          
        </Route>
        <Route  path='/cooktail/:id' element={<SingleCocktail/>}>
          
        </Route>
        <Route  path='*' elemen={<Error/>}>
          
        </Route>
      </Routes>
      <Outlet/>
    </Router>
  )
}

export default App
