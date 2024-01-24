/* eslint-disable react/prop-types */
import styles from './Home.module.css'
import Card from '../components/Card'
import FooterBar from '../components/FooterBar/FooterBar'
import Pagination from '../components/FooterBar/Pagination'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { changePagesize, changePage } from '../redux/topHeadlinesSlice'

const Home = () => {
  const topHeadlines = useSelector(state => state.topHeadlines)
  const dispatch = useDispatch()

  const [data, setData] = useState(null);

  const handleClick = value => {
    dispatch(changePage(value))
   }

  useEffect(() => {
    const getTopHeadlines = () => {
      console.log('topHeadlines:', topHeadlines)
      const querystring = `?country=${topHeadlines.country}&pagesize=${topHeadlines.pagesize}&page=${topHeadlines.page}`
      fetch(`${import.meta.env.VITE_NEWSAPI_URL}top-headlines${querystring}`)
      .then(res => res.json())
      .then(data => setData(data))
    }
    getTopHeadlines()
  }, [topHeadlines])

  return (
    <>      
      <div>
        {data?.data.articles.map((article, i) => 
          <Card article={article} key={i}/>
        )}
      </div>
      <FooterBar>
        <label className={styles.showResults}>Mostrar&nbsp;
          <select onChange={e => dispatch(changePagesize(e.target.value))}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          &nbsp;Resultados
        </label>
        <div className={styles.wrapPagination}>
          <div>Pagina {data?.currentPage} de {data?.pages}</div>
          <div><Pagination currentPage={data?.currentPage} pages={data?.pages} handleClick={handleClick} /></div>
        </div>
      </FooterBar> 
    </>
  )
}

export default Home