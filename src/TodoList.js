import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useRef } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


function TodoList(){
    const now = dayjs();

    const [todo, setTodo] = useState({description: '', date: now.format('DD.MM.YYYY'), priority: ''});
    const [todos, setTodos] = useState([]);
    const [dateInput, setDateInput] = useState(now);

    const gridRef = useRef();

    const columns = [
        { field: "description", sortable: true, filter: true, floatingFilter: true, animateRows: true },
        { field: "date", sortable: true, filter: true, floatingFilter: true, animateRows: true },
        { field: "priority", sortable: true, filter: true, floatingFilter: true, animateRows: true, 
        cellStyle: params => params.value.toLowerCase() === "high" ? {color: 'red'} : {color: 'black'} }
        ]
        
    const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
    }

    const addTodo = (event) => {
    setTodos([...todos, todo]);
    }

    const dateInputChanged = date =>{
        setTodo({...todo, date: date.format('DD.MM.YYYY')});
        setDateInput(date)
    }

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
        setTodos(todos.filter((todo, index) =>
        index !== gridRef.current.getSelectedNodes()[0].childIndex))
        }
        else {
        alert('Select row first');
        }
        }

    return (
        
    <LocalizationProvider dateAdapter={AdapterDayjs} >
        <div>
            <div id='box'>
            <h3>Add Todo:</h3>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                
            <DatePicker
                label="Date"
                value={dateInput} 
                onChange={dateInputChanged}/>
                
            <TextField
                label="Description"
                variant="standard"
                name="description" value={todo.description}
                onChange={inputChanged}/>

            <TextField
                label="Priority"
                variant="standard"
                name="priority" value={todo.priority}
                onChange={inputChanged}/>

            <Button onClick={addTodo}>Add</Button>
            <Button onClick={deleteTodo}>Delete</Button>
            </Stack>


            </div>
            <div className="ag-theme-material"
              style={{height: '700px', width: '50%', margin: 'auto'}} >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={ params => gridRef.current = params.api }
                    rowSelection="single"
                    columnDefs={columns}
                    rowData={todos}>
                </AgGridReact>

              </div>

        </div>
        </LocalizationProvider>
        );
    }
    export default TodoList;