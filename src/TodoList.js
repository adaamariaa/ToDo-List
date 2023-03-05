import React, { useState } from 'react';
import TodoTable from './TodoTable';

function TodoList(){
    const [todo, setTodo] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
    }
    const addTodo = (event) => {
    setTodos([...todos, todo]);
    }

    const delTodo = index => {
        setTodos(oldTodos =>{
        return oldTodos.filter((todo, i) => i !== index)
        })
    }
    

    return (
        <div>
            <div id='box'>
            <h3>Add Todo:</h3>
            Date:<input type="date" onChange={inputChanged} name="date" value={todo.date}/>
            Description:<input type="text" onChange={inputChanged} name="description" value={todo.description}/>
            <button onClick={addTodo}>Add</button>

            </div>
        <TodoTable todos={todos} delTodo={delTodo}></TodoTable>
        </div>
        );
    }
    export default TodoList;