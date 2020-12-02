import { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const useExchange = (label, initialState, option) => {

    const [state, setState] = useState(initialState);

    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <Selector
                onChange={ e => setState(e.target.value) }
                value={state}
            >
                <option value="">-- Select Here --</option>
                {option.map( opt => (
                    <option key={opt.code} value={opt.code}>{opt.name}</option>
                ) )}
            </Selector>
        </Fragment>
    );

    return [state, Select, setState];
}

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`
const  Selector = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

export default useExchange;