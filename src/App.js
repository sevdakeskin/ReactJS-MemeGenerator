import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Counter from './components/Counter';
import Form from './components/Form';
import Signup from './components/Signup';
import Ternary from './components/Ternary';
import UseEffect from './components/UseEffect';
import MUI from './components/MUI';
import Input from './components/Input';

function App() {
  return (
    <div className='App'>
      {
        /*<Counter/>
        <Form/>
        <Signup/>
        <Ternary/>
        <UseEffect/>
        
        
        <MUI/>
        <Input/>
      */
      }
    <Navbar/>
    <Meme/>

    </div>
  );
}

export default App;
