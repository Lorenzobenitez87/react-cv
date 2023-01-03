import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Knowledges from './pages/Knowledges'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import reportWebVitals from './reportWebVitals'

function App () {
    return(
  <>
    <Router>
        <Routes>
          <Route exact path='/' element={<Home /> } />
          <Route path='/competences' element={<Knowledges /> } />
          <Route path='/portfolio' element={<Portfolio /> } />
          <Route path='/contact' element={<Contact /> } />
          <Route path='*' element={<NotFound /> } />
        </Routes>
      </Router>
  </>
    )
    
}

export default App

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
