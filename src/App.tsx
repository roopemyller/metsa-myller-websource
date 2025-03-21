import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './components/Services'

import './App.css'
import Contact from './components/Contact'
import React from 'react'
import { Box, Container } from '@mui/material'

const App : React.FC = () => {

  return (
    <>
      <BrowserRouter basename='metsa-myller-websource'>
      <Header />
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <Container sx={{paddingTop: '74px' , paddingBottom: '74px'}}>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/palvelut" element={<Services/>}/>
                <Route path="/yhteystiedot" element={<Contact/>}/>
              </Routes>
            </Container>
        </Box>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App