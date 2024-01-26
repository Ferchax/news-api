import { NavLink } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { resetPagination } from '../redux/paginationSlice'
import { resetTopHeadData } from '../redux/topHeadlinesSlice'
import { resetSearchData } from '../redux/searchSlice'

const NavBar = () => {
  const dispatch = useDispatch()

  const topHeadlinesClickHandler = () => {
    dispatch(resetPagination())
    dispatch(resetTopHeadData())
  }

  const searchClickHandler = () => {
    dispatch(resetPagination())
    dispatch(resetSearchData())
  }

  return (
    <nav>
      <ul className="flex justify-center sm:justify-start">
        <li className="mr-6">
          <NavLink className={({ isActive }) => (isActive ? 'text-blue-800' : 'text-blue-500 hover:text-blue-800')} to="/" onClick={topHeadlinesClickHandler}>Ultimas Noticias</NavLink>
        </li>
        <li className="mr-6">
          <NavLink className={({ isActive }) => (isActive ? 'text-blue-800' : 'text-blue-500 hover:text-blue-800')} to="/search" onClick={searchClickHandler}>Buscador</NavLink>
        </li>            
      </ul>
    </nav>
  )
}

export default NavBar