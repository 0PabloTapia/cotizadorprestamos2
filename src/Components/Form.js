import { useEffect, useState } from 'react';
import Error from './Error';
import styled from '@emotion/styled';
import useExchange from '../hooks/useExchange';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios'

const Form = ({ setExchange, setCrypto }) => {

    const[cryptolist, setCryptocurrency] = useState([])
    const[error, setError] = useState(false)

    const EXCHANGE = [
        { code: 'USD', name: 'US Dollars' },
        { code: 'CLP', name: 'Chilean Peso' },
        { code: 'EUR', name: 'Euros' },
        { code: 'JPY', name: 'Yen' }
    ]

    //Custom Hooks

    const [exchange, SelectExchange, setState] = useExchange('Choose Exchange', '', EXCHANGE);

    const[crypto, SelectCrypto] = useCrypto('Choose Cryptocurrency', '', cryptolist)

    useEffect(() => {
        const APIcall = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);
            setCryptocurrency(result.data.Data);
        }
        APIcall();
    }, []);


    const cryptoPrice = e => {
        e.preventDefault();

        if(exchange === '' || crypto === '') {
            setError(true);
            return;
        }

        setError(false);
        setExchange(exchange);
        setCrypto(crypto);
    }

    return(
        <form
            onSubmit={cryptoPrice}
        >
            {error ? <Error message='All fields are required' /> : null}

            <SelectExchange />
            <SelectCrypto />

            <Button 
                type="submit"
                value="Calculate"
            />
        </form>
    )
};

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`

export default Form;
