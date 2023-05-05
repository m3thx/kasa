// Import de modules
import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

import { GlobalStyle, BodyDiv } from './styles/index'

// Import de pages
import Home from './pages/Home';
import Header from './components/Header';
import Accommodation from './pages/Accommodation';
import Footer from './components/Footer'
import About from './pages/About';
import Error from './components/Error';


// https://www.delftstack.com/fr/howto/react/react-fonts/
import WebFont from 'webfontloader';
import './styles/index.css'

WebFont.load({
    google: {
        families: ['Montserrat:400,500', 'sans-serif']
    }
})

// Génération de la page
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <HelmetProvider>
                <GlobalStyle />
                <BodyDiv>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path='/Accommodation/:idAccommodation' >
                            <Accommodation />
                        </Route>
                        <Route exact path="/About/">
                            <About />
                        </Route>
                        <Route path="*">
                            <Error />
                        </Route>
                    </Switch>
                    <Footer />
                </BodyDiv>
            </HelmetProvider>
        </Router>
    </React.StrictMode>,
)