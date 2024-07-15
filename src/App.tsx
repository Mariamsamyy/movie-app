import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import MovieDetail from './pages/movieDetails';
import FavoritesPage from './pages/favPage';
import SearchResults from './pages/SearchResults';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {


  return (
    <>
        <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/top_rated" element={<TopRated/>}/>
        <Route path="/movie/:movieId" element={<MovieDetail/>} />
        <Route path="/fav" element={<FavoritesPage/>} />
        <Route path="/search/movie" element={<SearchResults />} />
      </Routes>
      </Provider>,

    </>
  );
};

export default App;
