import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const API_URL = "https://divyanshu-portfolio-x28n.onrender.com/api/projects";

//get all projects

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, thunkAPI) => {
    console.log("Fetching projects from backend...");
    try {
      const res = await axios.get(API_URL);
      console.log("RESPONSE:", res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


const projectSlice = createSlice({
    name:'project',
    initialState:{
        projects:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProjects.pending,(state)=>{
            state.loading = true;
            state.error=  null;
        })
        .addCase(fetchProjects.fulfilled,(state,action)=>{
            state.loading = false;
            state.projects = action.payload;
        })
        .addCase(fetchProjects.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload || 'Failed to fetch';
        });
    },
});

export default projectSlice.reducer;