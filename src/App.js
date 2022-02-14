import React from 'react';
import './styles/style.scss';
import Intro from './components/Intro';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Intro />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
