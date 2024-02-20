import { FC } from "react";
import './Currency.css';

interface CurrencyProps {
    text: string,
    symbol: string
}

const Currency: FC<CurrencyProps> = ({text, symbol}) => {
    return(
        <div className='currency'>
            <p>{text.toUpperCase()}, {symbol}/₽</p>
        </div>
    )
}

export default Currency;