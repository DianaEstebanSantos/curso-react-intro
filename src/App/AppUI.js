import { TodoCounter } from '../TodoCounter';
import { TodoShearch } from '../TodoShearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos} from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodoForm} from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import React from 'react';



//componente appiu
function AppUI(){
  const{
      loading, error, searchedTodos, completeTodo, deleteTodo,
      openModal, setOpenModal,
  } = React.useContext(TodoContext)
  console.log(openModal)
  
    return (
        <>
          <TodoCounter/>
          <TodoShearch/>
      
        
                <TodoList>
                  {loading && <><TodosLoading/><TodosLoading/></>}
                  {error && <TodosError/>}
                  {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

                  {searchedTodos.map(todo => (
                    <TodoItem 
                      key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed} 
                      onComplete={() => completeTodo(todo.text)}
                      onDelete = {()=> deleteTodo(todo.text)}
                    />
                  ))}
          
                </TodoList>
         
          <CreateTodoButton
          setOpenModal={setOpenModal}
          /> 

          {openModal &&(
             //toda la logica o los componentes que quiero teletransportar en nodos de html
            <Modal>
              <TodoForm />
          </Modal>
    
          )}
       
          
         
        </>
      );
}
export { AppUI};