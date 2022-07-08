import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPatients = createAsyncThunk('patients/getPatients',
  async() => {
    return fetch(`http://localhost:3001/patients`)
      .then((res) =>
        res.json()
      )
  }
)

const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPatients.pending]: (state) => {
      state.status = 'loading'
    },
    [getPatients.fulfilled]: (state, {payload}) => {
      state.list = payload
      state.status = 'success'
    },    
    [getPatients.reject]: (state) => {
      state.status = 'failed'
    },
  }
})

export default patientsSlice.reducer;