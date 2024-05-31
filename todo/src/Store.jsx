import { configureStore } from "@reduxjs/toolkit"
import todoreducer from "./todo/todoSlice"
import counterSlice from "./Counter/counterSlice"
import expenseReducer from "./Expense/expenseSlice"

const store=configureStore({
    reducer:
    {todo:todoreducer,
        counter:counterSlice,
        expense:expenseReducer
    }
})
export default store