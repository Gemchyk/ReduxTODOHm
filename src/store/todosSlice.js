import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: [
        {
            value: 'Buba',
            id: 1
        },
        {
            value: 'Buba',
            id: 2
        },
        {
            value: 'Buba',
            id: 3
        }
    ]
};


const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodoItem: (state, action) => {
            console.log(state);
            console.log(action);
            console.log(action.payload);
            state.data.push({value: action.payload.value, id: Date.now()});
        },

    }
});


export const {addTodoItem} = todosSlice.actions;

export default todosSlice.reducer;