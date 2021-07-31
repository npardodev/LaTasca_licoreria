import styled from 'styled-components'


export const DivSubMenu = styled.div `
    position: absolute;
    display: none;
    width:max-content;
    bottom:-70px;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    padding: 10px 30px;
    z-index: 100;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    background-color:#ffffff;
    a{
        width: max-content;
        margin: 5px 0px;
    }
`;

export const Header = styled.header `
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
`;

export const DivContentLogo = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    

`;

export const DivLogo = styled.div `
    height: 100%;
    img{
        height: 120px;
    }
`;

export const H2TituloLogo = styled.h2 `
    font-size: 2.2em;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    text-align: center;
    span{
        font-weight: 100;   
    }
`;

export const NavNavbar = styled.nav `
    width:90%;
    margin-top: 30px;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        flex: auto;
        flex-direction: row-reverse;
    }
    

`;










export const LiLinksNavbar = styled.li `
    display: flex;
    align-items:center;
    position: relative;
    cursor: pointer;
    z-index: 200;
    border-bottom: solid 3px #fff;
    :before{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0px;
        height: 3px;
        background-color: #0074D9;
        transition: width 1s cubic-bezier(0.25, 1, 0.5, 1);
       
    }
     &:hover ${DivSubMenu} {
        display: flex;
    }
    :hover:before{
        
        left: 0;
        right: auto;
        width: 100%;
        
    }
    
    
   
    a{
        z-index: 200;
        text-decoration: none;
        color: #232323;
        
    }
    img{
        height:35px;
    }
    @media (max-width: 768px) {
       
       a{
           width: 100%;
            padding: 20px 20px;
            margin-left: 20px;
       }
       img{
            margin-left: 40px;
            height:50px;
       }
    }
`;