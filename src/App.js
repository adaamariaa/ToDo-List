import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {
  const [value, setValue] = useState('home');

  const handleChange = (event, value) => {
      setValue(value);
      };

return (
  <div className='App'>
  <Tabs value={value} onChange={handleChange}>
      <Tab value="Home" label="Home" />
      <Tab value="Todo List" label="TodoList" />
  </Tabs>
  {value === 'Home' && <h1>This is the Homepage</h1>}
  {value === 'Todo List' && <TodoList/>}
  </div>
  );
};

export default App;