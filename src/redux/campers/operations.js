import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from '../../api/campersApi';
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
