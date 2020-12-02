import styled from '@emotion/styled';

const Pricing = ({ result }) => {
    if(Object.keys(result).length === 0) return null;
    console.log(result)
    return(
        <Content>
            <Price>The Price is: <span>{result.PRICE}</span> </Price>
            <Info>Highest Price in the last 24hrs: <span>{result.HIGH24HOUR}</span> </Info>
            <Info>Lowest Price in the last 24hrs: <span>{result.LOW24HOUR}</span> </Info>
            <Info>Change Percentage in the last 24hrs: <span>{result.CHANGEPCT24HOUR}%</span> </Info>
            <Info>Last Update: <span>{result.LASTUPDATE}</span> </Info>
        </Content>
    )
}

const Content = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`
const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`
const Price = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`


export default Pricing;