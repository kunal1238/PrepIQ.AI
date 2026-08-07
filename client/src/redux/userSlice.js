import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");
const userSlice = createSlice({
    name:"user",
    initialState:{
         userData: storedUser ? JSON.parse(storedUser) : null
    },
    reducers:{
        setUserData:(state,action)=>{
            state.userData = action.payload

        }
    }
})

export const {setUserData} = userSlice.actions

export default userSlice.reducer
