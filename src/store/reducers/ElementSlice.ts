import { createSlice } from '@reduxjs/toolkit';
import { Element } from './../../models/Element';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchElements } from './ActionCreators';

interface ElementState {
  elements: Element[];
  error: string;
  isLoading: boolean;
  currency: Currency;
  dataXAxis: string[];
  dataYAxis: number[];
  averageValue: number;
}

interface Currency {
  symbol: string;
  text: string;
}

const initialState: ElementState = {
  elements: [],
  error: '',
  isLoading: false,
  currency: {
    symbol: '$',
    text: 'Курс доллара',
  },
  dataXAxis: [],
  dataYAxis: [],
  averageValue: 0,
};

export const elementSlice = createSlice({
  name: 'element',
  initialState,
  reducers: {
    setDataAxis(state, action: PayloadAction<string>) {
      state.dataXAxis = [];
      state.dataYAxis = [];
      state.elements.forEach((el) => {
        if (el.indicator === action.payload) {
          state.dataXAxis.push(el.month);
          state.dataYAxis.push(el.value);
        }
      });
    },

    setAverageValue(state) {
      state.averageValue = Number(
        (
          state.dataYAxis.reduce((acc, el) => acc + el, 0) /
          state.dataYAxis.length
        ).toFixed(1)
      );
    },

    setCurrency(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case '$':
          state.currency.text = 'Курс доллара';
          state.currency.symbol = '$';
          break;
        case '€':
          state.currency.text = 'Курс евро';
          state.currency.symbol = '€';
          break;
        case '¥':
          state.currency.text = 'Курс юаня';
          state.currency.symbol = '¥';
          break;
        default:
          return state;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchElements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchElements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.elements = action.payload;
      })
      .addCase(fetchElements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.type;
      });
  },
});

export default elementSlice.reducer;
