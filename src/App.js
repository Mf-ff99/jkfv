import React from 'react'
import Nav from './components/Nav/nav'
import Main from './main'
import './App.css';

function App() {

  return (
    <main>
      <header>
        <Nav />
      </header>

      <section className="page-view">
        <Main />
      </section>
    </main>
  );
}

export default App;
