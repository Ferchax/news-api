import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Search from './pages/Search'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="search" element={<Search />}></Route>
      </Routes>
    </>
  )
}

export default App
