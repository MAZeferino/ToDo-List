import './../styles/tasksInfo.css'

function TasksInfo({cards}) {

  return (
    <div id='infoLine'>
      <p id='createdTasks'><span>Tarefas criadas</span> <span className='numberField'>{cards.length}</span></p>
      <p id='finishedTasks'><span>Concluidas</span> <span className='numberField'>{cards.filter((item) => item.checked).length} de {cards.length}</span></p>
    </div>
  )
}

export default TasksInfo
