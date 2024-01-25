import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { resetPagination } from '../redux/topHeadlinesSlice'

const NavBar = () => {
  const dispatch = useDispatch()

  return (
    <nav>
      <ul className="flex justify-center sm:justify-start">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/" onClick={() => dispatch(resetPagination())}>Ultimas Noticias</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/search" onClick={() => dispatch(resetPagination())}>Buscador</Link>
        </li>            
      </ul>
    </nav>
  )
}

export default NavBar