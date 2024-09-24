import { useState } from 'react'
import Trash from './../assets/Trash.png'
import './../styles/Card.css'

function Card({card, setCards, array }) {
  const checkCard = (card, event) => {
    setCards(array.map((item) => (item.id === card.id ? {...item, checked: event.target.checked} : item )))
  }
  const deleteCard = (card) => {
    if(card.checked){
      setCards(array.filter((item) => item.id !== card.id))
    } else{
      setCards(array.filter((item) => item.id !== card.id))
    }
  }

  return (
    <li key={card.id.toString()} className={card.checked ? 'checkedLi' : ''}>
      <span>
        <input type='checkbox' onChange={(event) => checkCard(card, event)} />
        <span className={card.checked ? 'checked' : ''}>{card.title}</span>
      </span>
      <button className='cardButton' onClick={() => deleteCard(card)}><img src={Trash} /></button>
    </li>
  )
}

export default Card
