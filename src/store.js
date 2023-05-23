import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from './slices/todolistSlice'


export default configureStore({
    reducer: {
        todoList: todoListReducer
    }

})