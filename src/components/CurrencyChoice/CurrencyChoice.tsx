import { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { elementSlice } from '../../store/reducers/ElementSlice';
import './CurrencyChoice.css';

type Item = string;
interface CurrencyProps {
  symbol: string;
}
const items: Item[] = ['$', '€', '¥'];

export const CurrencyChoice: FC<CurrencyProps> = ({ symbol }) => {
  const dispatch = useAppDispatch();
  const { setCurrency } = elementSlice.actions;
  const setValue = (e: any) => {
    dispatch(setCurrency(e.value));
  };

  return (
    <Theme className='currencyChoice' preset={presetGpnDefault}>
      <ChoiceGroup
        value={symbol}
        onChange={setValue}
        items={items}
        getItemLabel={(item) => item}
        multiple={false}
        name="ChoiceCurrency"
      />
    </Theme>
  );
};
