import axios from 'axios';
import { Element } from '../../models/Element';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchElements = createAsyncThunk(
  'elements/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Element[]>(
        'https://65d1f68b987977636bfbb89e.mockapi.io/api/all-elements'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить элементы');
    }
  }
);
