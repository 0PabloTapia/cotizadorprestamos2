import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './Components/Form';
import Pricing from './Components/Pricing';

function App() {

  const [exchange, setExchange] = useState('');
  const [crypto, setCrypto] = useState('');
  const [result, setResult] = useState({});

  useEffect(() => {

    const cryptoCheck = async () => {
      if(exchange === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${exchange}`;

      const result = await axios.get(url)
      setResult(result.data.DISPLAY[crypto][exchange])
    }
    cryptoCheck();

  }, [exchange, crypto])



  return (
    <Container>
      <div>
        <Image 
          src={image}
          alt='cryptocoins'
        />
      </div>
      <div>
        <Header>CryptoCurrency Exchange</Header>
        <Form 
          setExchange={setExchange}
          setCrypto={setCrypto}
        />

        <Pricing 
          result={result}
        />
      </div>
    </Container>
  )
};

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`
const Header = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

export default App;
