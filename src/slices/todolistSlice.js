import { createSlice } from "@reduxjs/toolkit";


export const todoListSlice=createSlice({
    name:"todoList",
    initialState:{
        input:"",
        tasks:[],
        editing:false
        },
    reducers:{
        setInput:function(state, action){
            state.input=action.payload
        },
        setTasks:function(state, action){
            if(state.editing==false) state.tasks=[...state.tasks, state.input];
            else{
                state.tasks=state.tasks.map((task, index)=>{
                    if(index==state.editing){
                        return state.input;
                    } 
                    return task
                });
                state.editing=false

            }

            state.input=""
        },
        setDeleteTask:function(state, action){
        state.tasks=state.tasks.filter((task, id)=>{
            return id !==action.payload
        })
        },
        setEditTask:function(state, action){
            state.editing=action.payload;
            state.input=state.tasks[action.payload]
        }

    }
})
export const {setInput, setTasks, setDeleteTask, setEditTask}=todoListSlice.actions
export default todoListSlice.reducer