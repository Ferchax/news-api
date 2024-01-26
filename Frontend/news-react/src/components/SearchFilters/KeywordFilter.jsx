import { useDispatch, useSelector } from 'react-redux'
import { changeKeywords } from '../../redux/searchSlice'

const KeywordFilter = () => {
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  return (
    <div>
      <label>Palabras Clave:&nbsp;
        <input type="text" onInput={e => dispatch(changeKeywords(e.target.value))} value={search.keywords} />
      </label>
    </div>
  )
}

export default KeywordFilter