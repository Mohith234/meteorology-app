import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchGeofeatures = createAsyncThunk('geofeatures/fetchGeofeatures', async (location) => {
  const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.REACT_APP_API_KEY}`);
  return response.data.results[0];
});

const geofeaturesSlice = createSlice({
  name: 'geofeatures',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeofeatures.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGeofeatures.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchGeofeatures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default geofeaturesSlice.reducer;
