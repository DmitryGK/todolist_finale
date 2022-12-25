import { FilterValueType } from "./App"

type TasksPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    removeTask: (id: number) => void
    changeFilterValue: (value: FilterValueType) => void
}

function TodoList(props: TodoListPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li key={t.id}>
                        <input type='checkbox' checked={t.isDone} />
                        <span>{t.title}</span>
                        <button onClick={() => {props.removeTask(t.id)}}>x</button>
                    </li>)
                }
            </ul>
            <div>
                <button onClick = {() => {props.changeFilterValue('all')}}>All</button>
                <button onClick = {() => {props.changeFilterValue('active')}}>Active</button>
                <button onClick = {() => {props.changeFilterValue('completed')}}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList