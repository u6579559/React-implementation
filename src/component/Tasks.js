import Task from './Task'
// import { useState } from 'react'
// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'Monday',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting at school',
//         day: 'Tuesday',
//         reminder: false
//     }
// ]

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} 
                task={task}
                onDelete={onDelete}
                onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
