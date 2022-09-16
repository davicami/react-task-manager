import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  // di dafault non mostriamo la form per aggiungere un task
  const [showAddTask, setShowAddTask] = useState(false)

  // lo stato è immutabile quindi per aggiornare lo stato va usato setState 
  // ogni volta per ricrearlo 
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6 at 1:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Go to the gym',
      day: 'Feb 7 at 18:30pm',
      reminder: false,
    }
  ])

  // delete task
  const deleteTask = (id) => {
    // console.log("delete", id)
    setTasks(tasks.filter(
      (task) => (task.id !== id)
    ))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    // console.log("call toggleREminder",id);

    // da notare che lo spread operator fa lo spread dell'array task, ma 
    // lo uniamo  con reminder e data che reminder è un duplicato vince 
    // l'ultimo valore, quindi quello assegnato da noi
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // add task
  const addTask = (task) => {
    //console.log(task)

    // per fare in fretta prendiamo un numero random 0<x<10000
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  return (
    <div className="container">

      <Header 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
       />

      {showAddTask && <AddTask onAdd={addTask} /> }

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )
      }

    </div>
  )
}

export default App;
