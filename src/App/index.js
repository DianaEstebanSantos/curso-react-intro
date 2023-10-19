import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
//import './App.css';

//componente app
function App() {
  return(
    <TodoProvider>
    <AppUI/>
    </TodoProvider>
  ); 
}

export default App;


// loading={loading}
    // error={error}
    // completedTodos={completedTodos}
    // totalTodos={totalTodos}
    // searchValue={searchValue}
    // setSearchValue={setSearchValue}
    // searchedTodos={searchedTodos}
    // completeTodo={completeTodo}
    // deleteTodo={deleteTodo}