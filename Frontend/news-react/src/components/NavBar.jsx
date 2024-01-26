import { Link } from "react-router-dom"
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
          <Link className="text-blue-500 hover:text-blue-800" to="/" onClick={topHeadlinesClickHandler}>Ultimas Noticias</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/search" onClick={searchClickHandler}>Buscador</Link>
        </li>            
      </ul>
    </nav>
  )
}

export default NavBar