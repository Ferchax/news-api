/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { changePagesize, changePage } from '../../redux/paginationSlice'
import styles from './FooterBar.module.css'
import Pagination from './Pagination'


const FooterBar = () => {
  const pagination = useSelector(state => state.pagination)
  const dispatch = useDispatch()

  const handleClick = value => {
    dispatch(changePage(value))
  }

  return (
    <div className={styles.pagination}>
      <label className={styles.showResults}>Mostrar&nbsp;
        <select value={pagination.pagesize} onChange={e => dispatch(changePagesize(+e.target.value))}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        &nbsp;Resultados
      </label>
      <div className={styles.wrapPagination}>
        <div>Pagina {pagination.currentPage} de {pagination.pages}</div>
        <div><Pagination currentPage={pagination.currentPage} pages={pagination.pages} handleClick={handleClick} /></div>
      </div> 
    </div>
  )
}

export default FooterBar;