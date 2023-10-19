import React from "react";

function useLocalStorage(itemName, initialValue){
  //estados en nuestro custtom hooks
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(()=>{
        //bloque try catch
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          //llamamos el estado
          setLoading(false);
        }catch(error){
          setLoading(false);
          setError(true);
        }
        }, 2000);
    },[]);
  
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    console.log(item);
    return {item, saveItem,loading, error,
    };
  
  }

  export{useLocalStorage};

  // const defaultTodos = [
//   {text: 'Ser feliz', completed: true},
//   {text: 'Morris', completed: false},
//   {text: 'Deysi', completed: false},
//   {text: 'vaca', completed: false},
//   {text: 'tatiana', completed: false},
//   {text: 'tatia', completed: false},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1');