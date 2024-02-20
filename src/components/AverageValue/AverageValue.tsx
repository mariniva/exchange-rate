import { FC } from 'react';
import './AverageValue.css';

interface AverageProps {
  value: number;
}
const AverageValue: FC<AverageProps> = ({ value }) => {
  return (
    <div className='averageValue'>
      <label className='labelAverage'>Среднее за период</label>
      <p className='value'><span>{value}</span> ₽</p>
    </div>
  );
};

export default AverageValue;
