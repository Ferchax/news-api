/* eslint-disable react/prop-types */
import styles from './Home.module.css';
import Card from '../components/Card';
import { useState, useEffect } from "react";

function Pagination({currentPage, pages, handleClick}) {
  const lengthNumbersToShow = 2
  let firstNumberToShow = 1 
  let lengthToShow = lengthNumbersToShow

  if(currentPage > lengthNumbersToShow) {
    firstNumberToShow = currentPage == pages ? currentPage - (lengthNumbersToShow-1) : currentPage
    lengthToShow = currentPage + lengthNumbersToShow >= pages  ? currentPage + (pages - currentPage) : currentPage + lengthNumbersToShow
  }

  //console.log('lengthToShow', lengthToShow)

  let numbers = []

  for(let i=firstNumberToShow, j=0; i<=lengthToShow; i++, j++) {
    numbers[j] = i
  }

  let prevPage = currentPage - 1
  let nextPage = currentPage + 1

  return (
    <>
      {currentPage > 1 && <span onClick={()=> handleClick(prevPage)}> &#60; </span>}
      {numbers.map((n, i) => (
        <span key={i} onClick={()=> handleClick(n)} style={n==currentPage ? {backgroundColor: 'grey'} :{}}> {n} </span>
      ))}
      {currentPage < pages && <span onClick={()=> handleClick(nextPage)}> &#62; </span>}
    </>
  )
}

const Home = () => {
  const [data, setData] = useState(null);
  const [apiParams, setApiParams] = useState({
    country: "ar",
    pagesize: 10,
    page: 1
  });

  const handleClick = value => {
    console.log('value:', value)
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
      <div className={styles.pagination}>
        <label>Mostrar&nbsp;
          <select onChange={event => setApiParams({...apiParams, pagesize: event.target.value})}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          &nbsp;Resultados
        </label>
        <div>Pagina {data?.currentPage} de {data?.pages}</div>
        <div><Pagination currentPage={data?.currentPage} pages={data?.pages} handleClick={handleClick} /></div>
      </div>      
    </>
  )
}

export default Home;