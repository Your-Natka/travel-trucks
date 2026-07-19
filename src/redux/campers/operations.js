import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from '../../api/campersApi';
import { buildQueryParams } from '../../utils/buildQueryParams';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, limit = 4, filters = {} } = {}, thunkAPI) => {
    try {
      const params = buildQueryParams({
        page,
        limit,
        filters,
      });

      return await getCampers(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      return await getCamperById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
