import styles from './Header.module.css'
import NavBar from "./NavBar"
import { useDispatch } from 'react-redux';
import { changeCountry } from '../redux/topHeadlinesSlice';

const Header = () => {
  const dispatch = useDispatch()

  return (
    <>
      <h1>Portal de Noticias</h1>
      <hr />
      <div className={styles.header}>
        <NavBar />
        <label>Pais:&nbsp;
          <select onChange={e => dispatch(changeCountry(e.target.value))}>
            <option value="ar">Argentina</option>
            <option value="us">Estados Unidos</option>
          </select>
        </label>
      </div>
    </>
  )
}

export default Header;