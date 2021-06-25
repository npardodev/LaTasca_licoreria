import styled from 'styled-components'





export const Header = styled.header`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
`;

export const DivContentLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    

`;

export const DivLogo = styled.div`
    img{
        height: 120px;
    }
`;

export const H2TituloLogo = styled.h2`
    font-size: 2.2em;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    text-align: center;
    span{
        font-weight: 100;   
    }
`;

export const NavNavbar = styled.nav`
    width:90%;
    margin-top: 30px;

    

`;



export const UlLinksNavbar = styled.ul`
    display: flex;
    justify-content: space-around;
   
`;



;

export const DivSubMenu = styled.div`
    position: absolute;
    display: none;
    width:max-content;
    bottom:-110px;
   
    flex-direction:column;
    justify-content:center;
    align-items: center;
    padding: 10px 30px;
    z-index: 100;
    background-color:#ffffff;
    a{
        width: max-content;
        margin: 5px 0px;
    }
    
  
`;

export const LiLinksNavbar = styled.li`
    display: flex;
    align-items:center;
    position: relative;
    cursor: pointer;
    &:hover ${DivSubMenu} {
        display: flex;
    }
   
    a{
        text-decoration: none;
        color: #232323;
    }
`






