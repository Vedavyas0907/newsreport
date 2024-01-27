// src/App.js
import React from 'react';
//import { getNews1 } from './service';
// import NewsList from './getNews';
import NewsList2 from './NewsList2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>News Portal</h1>
      </header>
      <main>
        <NewsList2 />
      </main>
    </div>
  );
}

export default App;