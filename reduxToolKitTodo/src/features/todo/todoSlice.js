import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
// ye components mein kaam ayega 

export default todoSlice.reducer
// store ko bhi batana hai isliye store ko bhi ye reducers dena padhta hai



// nanoid generate unique ids
// createSlice from reduxjstoolkit
// store starting mein kaisa dikhega (initial State jo ki object ya data fetch kuch bhi array)
//  slice reducers ka bada version
// slices have name
// every slice have initial state
// reducers mein propert aur funxction ata hai 
// hamesha res req jaise 2 cheez milegi state action 
// state = abhi kya situation hai
// action = koi value aye vo value action se milegi
// payload itself an object  isme id email kuch bhi aa sakta hain
// 