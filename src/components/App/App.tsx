import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Page404 from 'pages/404';
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
          <Route path="/" element={<MainPage />}/>
          <Route path='*' element={<Page404/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
