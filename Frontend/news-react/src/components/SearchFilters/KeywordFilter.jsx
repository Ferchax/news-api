import { useDispatch } from 'react-redux'
import { changeKeywords } from '../../redux/searchSlice'

const KeywordFilter = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <label>Palabras Clave:&nbsp;
        <input type="text" onInput={e => dispatch(changeKeywords(e.target.value))}/>
      </label>
    </div>
  )
}

export default KeywordFilter