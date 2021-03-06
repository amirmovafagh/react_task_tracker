import Header from './components/Header';
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'do something',
            day: 'Monday 4th of July',
            reminder: true,
        }, {
            id: 2,
            text: 'do something 2',
            day: '5th of July',
            reminder: false,
        }, {
            id: 3,
            text: 'do something 3',
            day: '6th of July',
            reminder: true,
        },
    ]);

    //delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    //toggle reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task, reminder: !task.reminder} : task
            )
        )
    };

    return (
        <div className="container">
            <Header/>
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks')}
        </div>
    );
}


// Class based component
// class App extends React.Component{
//     render() {
//         return (
//             <div className="container">
//                 <Header/>
//             </div>
//         );
//     }
// }

export default App;
