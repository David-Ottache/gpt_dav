import React from 'react';

 import {Article, Brand, Cta, Feature, Navbar} from './components';
 import {Blog, Features, Footer, Header, Possibility, Stage } from './containers';
 import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className="gradient_bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand />
        <Stage/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>

      
    </div>
  )
}

export default App
