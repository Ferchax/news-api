import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Search from './pages/Search'
import Header from './components/Header'
import FooterBar from './components/FooterBar/FooterBar'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="search" element={<Search />}></Route>
      </Routes>
      <FooterBar />
    </>
  )
}

export default App
