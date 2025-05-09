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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
        }}>
        <Header />
        <Box
          component="main"
          sx={{
            pt: { xs: '56px', md: '74px' },
            pb: { xs: '20px', md: '30px' },
            flex: 1,
          }}
        >
          <Container
            className="content-container"
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
      </Box>
    </HashRouter>
  )
}

export default App