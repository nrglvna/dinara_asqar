import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from './container';
import { Navbar } from './components';
import Slider_photo from './container/Slider_photo/Slider_photo';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <SpecialMenu />
    <Chef />
    <Laurels />
    <Gallery />
    <Slider_photo/>
    <FindUs />
    <Footer />
  </div>
);

export default App;
