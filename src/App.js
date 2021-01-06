import React from 'react'
import Nav from './components/Nav/nav'
import Main from './main'
import './App.css';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <main>
      <header>
        <Nav />
      </header>

      <section className="page-view">
        <Main />
      </section>
      <Footer />
    </main>
  );
}

export default App;
