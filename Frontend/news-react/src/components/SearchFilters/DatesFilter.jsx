
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { changeDateFrom, changeDateTo } from '../../redux/searchSlice'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import styles from './DatesFilter.module.css'
import moment from 'moment'

const DatesFilter = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  function changeDateFromHandler(date) {
    setDateFrom(date)
    dispatch(changeDateFrom(moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY')))
  }

  function changeDateToHandler(date) {
    setDateTo(date)
    dispatch(changeDateTo(moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY')))
  }

  return (
    <div className={styles.datesFilter}>
      <label>Desde:&nbsp;
        <DatePicker selected={dateFrom} onChange={(date) => changeDateFromHandler(date)} dateFormat="dd/MM/yyyy" value={search.dateFrom} />
      </label>
      <label>Hasta:&nbsp;
      <DatePicker selected={dateTo} onChange={(date) => changeDateToHandler(date)} dateFormat="dd/MM/yyyy" value={search.dateTo} />
      </label>
    </div>
  )
}

export default DatesFilter