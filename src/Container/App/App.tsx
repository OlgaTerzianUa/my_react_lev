import { Route, Routes } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'
import Container from '@mui/material/Container'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Contact from 'Pages/Contact/Contact'
import Price from 'Pages/Price/Price'
import Serve from 'Pages/Serve/Serve'
import './App.scss'
import React from 'react'
import Home from 'Pages/Home/Home'
// type Props = {}
const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <Header />
            <Container>
                <Routes>
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Price" element={<Price />} />
                    <Route path="/Serve" element={<Serve />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
