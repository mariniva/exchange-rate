import { FC } from 'react';
import { ReactECharts } from '../../Echarts/ReactECharts';

type EChartsOption = echarts.EChartsOption;
var option: EChartsOption;

interface ChartProps {
  dataXAxis: string[];
  dataYAxis: number[];
  text: string;
}

const Chart: FC<ChartProps> = ({ dataXAxis, dataYAxis, text }) => {
  option = {
    
    color: '#F38B00',
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        axis: 'x',
      },
      valueFormatter: (value) => value + ' ₽'
    },
    xAxis: {
      type: 'category',
      data: dataXAxis,
      axisLine:{
        show: false,
      },
      axisTick:{
        show: false
      },
    },
    yAxis: {
      type: 'value',
      scale: true,
    },
    series: [
      {
        name: text,
        data: dataYAxis,
        type: 'line',
        symbol: 'none'
      },
    ],
  };
  return (
    <div className='chart'>
      <ReactECharts option={option} style={{width: 963, height: 300}} />
    </div>
  );
};

export default Chart;
