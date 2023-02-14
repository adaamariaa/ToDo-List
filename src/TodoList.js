import React, { useState } from 'react';

function TodoList(){
    const [todo, setTodo] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
    }
    const addTodo = (event) => {
    setTodos([...todos, todo]);
    }

    return (
        <div>
            <div id='box'>
            <h3>Add Todo:</h3>
            Date:<input type="text" onChange={inputChanged} name="date" value={todo.date}/>
            Description:<input type="text" onChange={inputChanged} name="description" value={todo.description}/>
            <button onClick={addTodo}>Add</button>

            </div>
        <table>
            <tbody>
                <th>Date</th>
                <th>Description</th>
                
                {todos.map((todo, index) => 
                <tr key={index}>
                    <td>{todo.date}</td>
                    <td>{todo.description}</td>
                    
                </tr>)}
            </tbody>
        </table>
        </div>
        );
    }
    export default TodoList;