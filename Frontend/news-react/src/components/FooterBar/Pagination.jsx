/* eslint-disable react/prop-types */
import styles from './Pagination.module.css'

const Pagination = ({currentPage, pages, handleClick}) => {
  const lengthNumbersToShow = pages > 2 ? 2 : 2 - pages
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
      {currentPage > 1 && <div onClick={()=> handleClick(prevPage)} className={styles.control}> &#60; </div>}
      {numbers.map((n, i) => (
        <div key={i} onClick={()=> handleClick(n)} className={`${styles.control} ${n==currentPage && styles.selected}`}> {n} </div>
      ))}
      {currentPage < pages && <div onClick={()=> handleClick(nextPage)} className={styles.control}> &#62; </div>}
    </>
  )
}

export default Pagination;