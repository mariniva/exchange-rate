import { FC, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { elementSlice } from '../store/reducers/ElementSlice';
import { CurrencyChoice } from './CurrencyChoice/CurrencyChoice';
import AverageValue from './AverageValue/AverageValue';
import Chart from './Chart/Chart';
import Currency from './Currency/Currency';


const Container: FC = () => {
  const dispatch = useAppDispatch();
  const { dataXAxis, dataYAxis, averageValue, currency } = useAppSelector(
    (state) => state.elementReducer
  );
  const { setAverageValue, setDataAxis } = elementSlice.actions;

  useMemo(() => {
    dispatch(setAverageValue());
    dispatch(setDataAxis(currency.text));
  }, [currency]);

  return (
    <div className='container'>
      <Currency text={currency.text} symbol={currency.symbol} />
      <CurrencyChoice symbol={currency.symbol} />
      <AverageValue value={averageValue} />
      <Chart dataXAxis={dataXAxis} dataYAxis={dataYAxis} text={currency.text} />
    </div>
  );
};

export default Container;
