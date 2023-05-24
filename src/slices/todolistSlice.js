import { createSlice } from "@reduxjs/toolkit";


export const todoListSlice=createSlice({
    name:"todoList",
    initialState:{
        input:"",
        tasks:[],
        editing:false,
        taskdone:[]
        },
    reducers:{
        setInput:function(state, action){
            state.input=action.payload
        },
        setTasks:function(state, action){
            
            if(state.editing!==false)
            {
                state.tasks[state.editing] = state.input
                state.editing = false
            }else{
                state.tasks=[...state.tasks, state.input];
                state.input = ""
            }

        },
        setDeleteTask:function(state, action){
        state.tasks=state.tasks.filter((task, id)=>{
            return id !==action.payload
        });
        state.taskdone=state.taskdone.filter((task, id)=>{
            if(id ==action.payload){
                return false
            }
            else{
                return true
            }
        })
        
        },
        setEditTask:function(state, action){
            state.editing=action.payload;
            state.input=state.tasks[action.payload]
        },

        setTasksDone:function(state, action){
            state.taskdone=[...state.taskdone, action.payload]
        }

    }
})
export const {setInput, setTasks, setDeleteTask, setEditTask, setTasksDone}=todoListSlice.actions
export default todoListSlice.reducer