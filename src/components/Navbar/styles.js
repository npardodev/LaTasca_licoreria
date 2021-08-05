import styled from 'styled-components'


export const DivContenedorEnlaces = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    a{
        display: flex;
    }
`;
export const ArrowIcon = styled.div`
    height: 30px;
    width: 50px;
    position: relative;
    right: 0px;
    z-index: 1000;
    cursor: pointer;
    z-index: 100;
   
   div{
        position: absolute;
        background-color: #232323;
        margin: 5px;
        pointer-events: none;
        width: 20px;
        height: 3px;
        bottom: 5px;
        :nth-child(1){
            
            right: 4px;
            transform: rotate(-45deg);
        }
        :nth-child(2){
            
            left: 4px;
            transform: rotate(45deg);
        }
   }
   @media (min-width: 768px){
        display: none;
   }
`;

export const DivSubMenu = styled.div `
  
    position: absolute;
    display: none;
    width:max-content;
    z-index: 1000;
    background-color:#fff;
   
    a{
        padding: 16px 16px;
        text-decoration: none;
        display: block;
    }
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        position: relative;
        
        height:0px;
        overflow: hidden;
        
        
        
        
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
    display: inline-block;
    position: relative;
    z-index: 200;
    border-bottom: solid 3px #fff;
  
   
    
    
   
    a{
        z-index: 200;
        text-decoration: none;
        color: #232323;
    
        
    }
    img{
        height:35px;
        cursor: pointer;
    }
    @media (min-width: 768px){

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

        :hover:before{
            
            left: 0;
            right: auto;
            width: 100%;
            
        }


        &:hover ${DivSubMenu} {
            display:flex;
            flex-direction: column;
        }
    }
    @media (max-width: 768px) {

        z-index: 0;
        display: flex;
        flex-direction: column;

       a{   
            display: flex;
            justify-content: space-between;
            padding: 15px 15px;
            width: 80%;
            z-index: 100;
          
       }
       img{
            margin-left: 40px;
            height:50px;
            width: 50px;
       }
    }
`;