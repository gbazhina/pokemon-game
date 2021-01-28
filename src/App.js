import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg3.jpg';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
        <Header 
          title="This is title" 
          desc="This is Description!"
        />
        <Layout 
          id="1" 
          desc="Layout1 description" 
          title="This is title Layout1" 
          urlBg={bg1}
        />
        <Layout 
          id="2" 
          desc="Layout2 description" 
          title="This is title Layout2" 
          colorBg
        />
        <Layout 
          id="3" 
          desc="Layout3 description" 
          title="This is title Layout3" 
          urlBg={bg2}
        />
        <Footer />
    </React.Fragment>
  );
}

export default App;
