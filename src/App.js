import React from 'react';

import { AboutUs, Chef, Video, Footer, Gallery, Header, Intro, Cases, Paketter, Otzyv} from './container';
import { Navbar } from './components';
import Slider_photo from './container/Slider_photo/Slider_photo';
import './App.css';

const App = () => (
  <div>
  {/*<Navbar />*/}  
   <Header />
  {/*<Cases />*/} 
   <AboutUs />
    <Intro />
    <Paketter />
    <Chef />
    
    <Gallery />
    <Slider_photo/>
    <Video/>
    <Otzyv/>
    <Footer />
  </div>
);

export default App;
