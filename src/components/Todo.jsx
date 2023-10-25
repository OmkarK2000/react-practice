import { useState } from "react"

const Todo = () => {

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])


    const addTodo = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input])
            setInput('')
        }
    }

    const remTodo = (index) => {
        setTodos(todos.filter((_,i)=> i !== index))
0    }

    return (
        <>
            <div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {
                    todos.map((todo, index) => {
                    return    <li key={index}>
                            {todo} <button onClick={()=>remTodo(index)}>Remove</button>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Todo