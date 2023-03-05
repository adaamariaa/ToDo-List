import React from 'react';
import './App.css';

const TodoTable =(props) => {

      return (
          <div>
           <table>
            <tbody>
              {
                props.todos.map((todo, index, delTodo)=>
                <tr key={index}>
                  <td>{todo.description}</td>
                  <td>{todo.date}</td>
                  <td><button onClick={() => {
                    props.delTodo(index);
                  }}>Delete</button></td>
                </tr>
                )
              }
            </tbody>
           </table>
          </div>             
      );
    }  
  
export default TodoTable;
