import Card from '../components/Card'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearch } from '../redux/searchSlice'
import DatesFilter from '../components/SearchFilters/DatesFilter'
import KeywordFilter from '../components/SearchFilters/KeywordFilter'
import styles from './Search.module.css'


const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const search = useSelector(state => state.search)
  const pagination = useSelector(state => state.pagination)
  const dispatch = useDispatch()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
        if(search.keywords.length >= 2) {
          setSearchTerm(search.keywords)
        }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [search.keywords])

  useEffect(() => {
    const getSearch = () => {
      dispatch(fetchSearch())
    }
    getSearch()
  }, [search.dateFrom, search.dateTo, searchTerm, pagination.pagesize, pagination.page, dispatch])

  return (
    <>
      <div className={styles.filters}>
        <DatesFilter />
        <KeywordFilter />
      </div>
      <div>
        {!search.loading ? 
          search.data?.data.articles.map((article, i) => 
          <Card article={article} key={i}/>
        ): <div style={{fontSize: '1.5rem'}}>Cargando...</div>}
      </div>
    </>
  )
}

export default Search;