import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import MainPage from 'pages/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import style from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
