const NavBar = () => {

  return (
    <nav>
      <ul className="flex justify-center sm:justify-start">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">Ultimas Noticias</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">Buscador</a>
        </li>            
      </ul>
    </nav>
  )
}

export default NavBar