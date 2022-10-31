import React from 'react';

import { AboutUs, Chef, Video, Footer, Gallery, Header, Intro, Cases, Paketter} from './container';
import { Navbar } from './components';
import Slider_photo from './container/Slider_photo/Slider_photo';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <Paketter />
    <Chef />
    <Cases />
    <Gallery />
    <Slider_photo/>
    <Video/>
    <Footer />
  </div>
);

export default App;
