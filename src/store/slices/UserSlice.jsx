import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: [],
    reducers:{
        addData(state, action){
            state.push(action.payload);
            console.log(action.payload);
        },
        removeData(state, action){
            console.log("index:" , action.payload);
            state.splice(action.payload , 1);
            // state.filter((action))
        },
        duplicateData(state, action){
            state.splice(action.payload.index , 0 , action.payload.data);
        },
    }
})

console.log(dataSlice.actions);

export default dataSlice.reducer;

export const {addData, removeData, duplicateData} = dataSlice.actions;