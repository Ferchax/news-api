/* eslint-disable react/prop-types */
import Card from '../components/Card'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopHeadlines } from '../redux/topHeadlinesSlice'

const Home = () => {
  const topHeadlines = useSelector(state => state.topHeadlines)
  const pagination = useSelector(state => state.pagination)
  const dispatch = useDispatch()

  useEffect(() => {
    const getTopHeadlines = () => {
      dispatch(fetchTopHeadlines())
    }
    getTopHeadlines()
  }, [topHeadlines.country, pagination.pagesize, pagination.page, dispatch])

  return (
    <>      
      <div>        
        {!topHeadlines.loading ? 
          topHeadlines.data?.data?.articles.map((article, i) => 
          <Card article={article} key={i}/>
        ): <div style={{fontSize: '1.5rem'}}>Cargando...</div>}
      </div>
    </>
  )
}

export default Home