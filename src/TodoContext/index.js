import React from "react";
import { useLocalStorage } from "./useLocalStorage";

 const TodoContext = React.createContext();

    function TodoProvider({ children }){
                //renombrar variables poniendo los dos puntitos y el nombre //custtom hooks con uselocalstore
            const{item: todos, saveItem:saveTodos, loading, error,} = useLocalStorage('TODOS_V1', []);
            const [searchValue, setSearchValue] = React.useState('');
            const [openModal, setOpenModal] = React.useState(true);

            const completedTodos = todos.filter(todo => !!todo.completed).length;
            const totalTodos = todos.length;

            const searchedTodos = todos.filter(
                (todo) =>{
                const todoText = todo.text.toLocaleLowerCase();
                const searchText =searchValue.toLocaleLowerCase();
                return todoText.includes(searchText);
                }
            );
             
            //console.log('los usuarios buscan todos de '+ searchValue);
            
            const addTodo = (text) => {
                const newTodos = [...todos];
                newTodos.push({
                    text,
                    completed: false,
                })
               
                saveTodos(newTodos);
            };
            const completeTodo = (text) => {

                const newTodos = [...todos];
                const todoIndex = newTodos.findIndex(
                (todo) => todo.text === text
                );
                newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
                saveTodos(newTodos);
            };

            const deleteTodo = (text) => {
                const newTodos = [...todos];
                const todoIndex = newTodos.findIndex(
                (todo) => todo.text === text
                );
                newTodos.splice(todoIndex, 1);
                saveTodos(newTodos);
            };
                return(

                    <TodoContext.Provider value = {{
                        loading, error, completedTodos, totalTodos, searchValue, setSearchValue,addTodo, searchedTodos, completeTodo, deleteTodo,openModal,setOpenModal,
                    }}>
                        {children}
                    </TodoContext.Provider>
                );
    }


 export {TodoContext, TodoProvider };