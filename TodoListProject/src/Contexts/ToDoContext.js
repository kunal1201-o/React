import {createContext,useContext} from 'react'

export const TodoContext=createContext({
   Todos:[
    {    
        todo:"TO do msg",
        id:1,
        completed:false
    }
   ],
   createTodo:({todo})=>{},
   updateTodo:({id,todo})=>{},
   deleteTodo:({id})=>{},
   checkTodo:({id})=>{}



});

export const TodoContextProvider=TodoContext.Provider;

export const  UseTodo=()=>{
    return useContext(TodoContext)
}