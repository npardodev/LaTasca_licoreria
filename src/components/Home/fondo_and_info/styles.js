import styled from 'styled-components'


export const DivContentInfo = styled.div`
    width: 100%;
    height:100%;
    margin-top:70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;

`;


export const H4TituloInfo = styled.h4`

    font-size: 2em;
    span{
        font-weight: 100;
    }


`;
export const DivInfoNosotrosContent = styled.div`

    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;

`;
export const DivInfoNosotros = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        margin-bottom: 10px;
        height: 45px;
        width: 45px;
        object-fit: cover;
        background-repeat:no-repeat;
    }
    h5{
        font-size: 1.2em;
        margin-bottom: 10px;
    }
    p{
        text-align: center;
        width: 50%;
    }
`;

