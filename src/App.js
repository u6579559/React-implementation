import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'
import { useState } from 'react'
import React from 'react'
// function App() {
//   const name= 'Brad'
//   const x = false
//   return (
//     <div className="App">
//       {/* <h1>
//         Hello From React
//       </h1> */}
//       {/* <h2>Hello {name}</h2> */}
//       {/* <h2>Hello {x ? 'Yes' : 'No'}</h2> */}
//       <Header />
//     </div>
//   );
// }

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Monday',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Tuesday',
      reminder: false
    },

  ])

  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task) =>
     task.id ===id ?{...task,reminder:!task.reminder} :task))
  }

  // Add Task
  const addTask = (task) =>{
    console.log(task)
    // const id = Math.floor(Math.random() * 10000) +1
    // const newTask = {id, ...task}
    // setTasks([...task, newTask])
  }


  return (
    <div className='container'>
      <Header />
      <AddTask onAdd = {addTask}/>
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        :
        (
          'No Tasks to show'
        )}
    </div>
  )
}

// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
