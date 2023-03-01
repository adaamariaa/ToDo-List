import React from 'react';
import './App.css';


export default function TodoTable(props) {

      return (
          <div>
           <table>
            <tbody>
              {
                props.todos.map((todo, index)=>
                <tr key={index}>
                  <td>{todo.description}</td>
                  <td>{todo.date}</td>
                  <td>{todo.priority}</td>
                </tr>
                )
              }
            </tbody>
           </table>
          </div>             
      );
    }  