import { configureStore } from "@reduxjs/toolkit"
import todoreducer from "./todo/todoSlice"
import counterSlice from "./Counter/counterSlice"

const store=configureStore({
    reducer:
    {todo:todoreducer,
        counter:counterSlice
    }
})
export default store