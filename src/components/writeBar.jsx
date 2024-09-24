import { useState } from 'react'
import Plus from './../assets/Plus.png'
import './../styles/writeBar.css'

function WriteBar({ cards, setCards }) {
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(1);

  const changeValue = (event) => {
    setValue(event.target.value);
  }
  const createCard = () => {
    setCounter(counter + 1)
    setCards([...cards, { id: counter, title: value, checked: false }])
    setValue('')
  }

  return (
    <div id='divAddTask'>
      <input id='inputAddTask' type="text" value={value} placeholder='Digite aqui a sua tarefa...' onChange={changeValue} />
      <button id='btnAddTask' onClick={createCard}>Criar <img id='plusIcon' src={Plus} /></button>
    </div>
  )
}

export default WriteBar
