import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import TopAnimes from './pages/TopAnimes'
import TrendingAnime from './pages/TrendingAnime'
import FilterAnime from './pages/FilterAnime'
import AnimeDetail from './pages/AnimeDetail'
import SearchAnime from './pages/SearchAnime'

function App() {
  const [menu,  setMenu] = useState(true)

  function menuClick() {
    setMenu(!menu);
  }

  return (
    <>
      <div className='w-full grid'>
        <Sidebar menu={menu} />
        <div className="grid-cols-8">
          <Navbar menuClick={menuClick} menu={menu} />
          <Routes>
            <Route path='/' element={<Home menu={menu} />} />
            <Route path='/top-animes' element={<TopAnimes menu={menu} />} />
            <Route path='/trending-animes' element={<TrendingAnime menu={menu} />} />
            <Route path='/filter-animes' element={<FilterAnime menu={menu} />} />
            <Route path='/details/:id' element={<AnimeDetail menu={menu} />} />
            <Route path='/search/:title' element={<SearchAnime menu={menu} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
