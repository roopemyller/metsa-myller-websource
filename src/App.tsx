import { HashRouter, Route, Routes } from 'react-router-dom'
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
    <HashRouter>
      <Header />
      <Box
        component="main"
        sx={{
          pt: { xs: '56px', md: '74px' },
          pb: { xs: '56px', md: '74px' },
          width: '100%',
          minHeight: 'calc(100vh - 120px)',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 1, md: 0 },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palvelut" element={<Services />} />
            <Route path="/yhteystiedot" element={<Contact />} />
          </Routes>
        </Container>
      </Box>
      <Footer />
    </HashRouter>
  )
}

export default App