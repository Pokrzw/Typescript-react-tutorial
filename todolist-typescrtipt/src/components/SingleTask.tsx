import { Todo } from '../model';
import {AiFillEdit} from "react-icons/ai"
import {BsFillTrashFill} from "react-icons/bs"
import {MdDone} from "react-icons/md"
import TodoList from './TodoList';
import {useState} from 'react'




interface Props{
    task: Todo;
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const SingleTask = ({task,todos,setTodos}:Props) => {

    const handleDone = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id===id? {...todo, isDone: !todo.isDone} : todo
            )
        )
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id!==id))
    }
    return ( 
        <div className="task">
            <div className="todos_single">
                {
                    task.isDone? (
                    <s className="todos_single--text">{task.todo}</s>
                    ) : (
                        <span className="todos_single--text">{task.todo}</span>
                    )
                }
                
                   <div>
                       <span className="icon" onClick={()=>{handleDelete(task.id)}}>
                        <BsFillTrashFill/>
                       </span>
                       <span className="icon" onClick={()=>{handleDone(task.id)}}>
                       <MdDone/>
                       </span>
                       
                   </div>
                
            </div>
        </div>
     );
}
 
export default SingleTask;