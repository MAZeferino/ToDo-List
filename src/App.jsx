import { useState } from 'react'
import Logo from './assets/Logo.png'
import WriteBar from './components/writeBar'
import TasksInfo from './components/tasksInfo'
import Card from './components/Cards'
import './styles/App.css'

function App() {
  const [cards, setCards] = useState([]);

  return (
    <>
      <header id='cabecalho'>
        <img src={Logo} />
        <WriteBar cards={cards} setCards={setCards}/>
      </header>
      <section id='listArea'>
        <TasksInfo cards={cards}/>
        <ul id='todo-list'>
          {cards.map((card)=>(
            <Card card={card} setCards={setCards} array={cards} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
