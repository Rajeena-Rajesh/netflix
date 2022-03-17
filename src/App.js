
import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import './App.css'
import Banner from './Component/Banner/Banner';
import RowPoster from './Component/RowPoster/RowPoster';
import {action,originals} from './url'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPoster url={originals} title='Netflix Originals'/>
      <RowPoster url={action} title='Action' isSmall/>
    
    </div>
  );
}

export default App;
