import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoShearch() {
  // y no lo traemos por medios de props lo traemos atravez de reac todo context
  const {
    searchValue, 
    setSearchValue,
   } = React.useContext(TodoContext);
    return (
    <input 
      placeholder="Ser feliz"
      className='TodoSearch'
      value={searchValue}
      onChange={
        (event)=>{
          setSearchValue(event.target.value)
         // console.log('Escribiste en el todo search');
         /* console.log(event);
          console.log(event.target);
          console.log(event.target.value);*/
        }
      }
      />
      );
  }

  export {TodoShearch};