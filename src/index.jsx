// Import de modules
import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

// Import de pages
import Home from './pages/Home';
import Header from './components/Header';
import Accommodation from './pages/Accommodation';
import Footer from './components/Footer'

// https://www.delftstack.com/fr/howto/react/react-fonts/
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families : ['Montserrat:400,500', 'sans-serif']
    }
})

// Override User agent rules
const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        color: #000000;
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 16px;
    }
`

// Génération de la page
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
                <Header />

                <Route exact path="/">
                    <Home />
                </Route>
                <Route path='/Accommodation/:idAccommodation'>
                    <Accommodation />
                </Route>
                <Footer />
        </Router>
    </React.StrictMode>,
)