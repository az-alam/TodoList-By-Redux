import React from 'react';
import { setInput, setTasks, setDeleteTask, setEditTask, setTasksDone } from './slices/todolistSlice';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import "./home.css";

function Home() {
    const dispatch = useDispatch();
    const initial= useSelector((state)=>{return state.todoList})

    function handleSubmit(e){
        e.preventDefault();
        dispatch(setTasks())
    }

    function handleDelete(e,id){
        e.preventDefault();
        dispatch(setDeleteTask(id))
    }

    function handleEdit(e,id){
        e.preventDefault();
        dispatch(setEditTask(id))
    }

    function handleDone(e, id){
        e.preventDefault();
        dispatch(setTasksDone(id))
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Activity' value={initial.input} onChange={(e)=>dispatch(setInput(e.target.value))} autoFocus></input>
        <button type='submit'>Add To Task</button>
    </form>

    <ul>
        {
         initial.tasks.map((task,id)=>{
            return <li className={initial.taskdone.includes(id)?"completed":""} key={id}>{task}
            <a href="" onClick={(e)=>handleDelete(e,id)}>
            <DeleteForeverIcon/>
            </a>
            <a href="" onClick={(e)=>handleEdit(e,id)}>
                <EditIcon/>
            </a>
            <a href="" onClick={(e)=>handleDone(e,id)}>
                <DoneAllIcon/>
            </a>
            </li>
         })   

        }
    </ul>

   
    </>
  )
}

export default Home