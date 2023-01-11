import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function App() {
  return (

    //BEM naming conviction
    <div className="app">
   

    {/* header */}
    <Header/>

    {/* App body */}
    <div className="app_body">
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      {/* Widgets */}

    </div>

      
    </div>
  );
}

export default App;
