/* eslint-disable react/prop-types */
import styles from './FooterBar.module.css'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { changePagesize, changePage } from '../../redux/topHeadlinesSlice'

const FooterBar = () => {
  const topHeadlines = useSelector(state => state.topHeadlines)
  const dispatch = useDispatch()

  const handleClick = value => {
    dispatch(changePage(value))
  }

  return (
    <div className={styles.pagination}>
      <label className={styles.showResults}>Mostrar&nbsp;
        <select onChange={e => dispatch(changePagesize(+e.target.value))}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        &nbsp;Resultados
      </label>
      <div className={styles.wrapPagination}>
        <div>Pagina {topHeadlines.data?.currentPage} de {topHeadlines.data?.pages}</div>
        <div><Pagination currentPage={topHeadlines.data?.currentPage} pages={topHeadlines.data?.pages} handleClick={handleClick} /></div>
      </div> 
    </div>
  )
}

export default FooterBar;