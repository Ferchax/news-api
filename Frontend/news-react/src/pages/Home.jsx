/* eslint-disable react/prop-types */
import styles from './Home.module.css';
import Card from '../components/Card';
import FooterBar from '../components/FooterBar/FooterBar';
import Pagination from '../components/FooterBar/Pagination';
import { useState, useEffect } from "react";


const Home = () => {
  const [data, setData] = useState(null);
  const [apiParams, setApiParams] = useState({
    country: "ar",
    pagesize: 10,
    page: 1
  });

  const handleClick = value => {
    setApiParams({...apiParams, page:value});
   };

  useEffect(() => {
    const getTopHeadlines = () => {
      fetch(`${import.meta.env.VITE_NEWSAPI_URL}top-headlines?country=${apiParams.country}&pagesize=${apiParams.pagesize}&page=${apiParams.page}`)
      .then(res => res.json())
      .then(data => setData(data))
    }
    getTopHeadlines()
  }, [apiParams])

  return (
    <>
      <h1>Portal de Noticias</h1>
      <div>
        <label>Pais:&nbsp;
          <select onChange={event => setApiParams({...apiParams, country: event.target.value})}>
            <option value="ar">Argentina</option>
            <option value="us">Estados Unidos</option>
          </select>
        </label>
      </div>
      <div>
        {data?.data.articles.map((article, i) => 
          <Card article={article} key={i}/>
        )}
      </div>
      <FooterBar>
        <label className={styles.showResults}>Mostrar&nbsp;
          <select onChange={event => setApiParams({...apiParams, pagesize: event.target.value})}>
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

export default Home;