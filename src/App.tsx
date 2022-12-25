import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';


export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'rest API', isDone: false },
        { id: 5, title: 'GraphQL', isDone: false }
    ])

    let [filter, setFilter] = useState<FilterValueType>('all')
    let tasksForTodoList = tasks
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }

    function changeFilterValue (value: FilterValueType) {
        setFilter(value)
    }

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id != id)
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <TodoList title={'What to learn'}
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilterValue={changeFilterValue}
            />
        </div>
    );
}


export default App;
