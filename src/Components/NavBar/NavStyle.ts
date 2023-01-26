import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer=styled.div`
width: auto;
height: 75px;
background-color:#252525 ;
border-radius: 0 0 10px 10px;
display: grid;
place-items: center;
position: sticky;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const Nav =styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
place-items: center;

width: 100vw;
max-width: 1200px;

`
export const NavLogo =styled.div`
display: flex;
justify-content: center;
place-items: center;
padding: 10px;
color: white;
font-size: 2rem;
:hover{cursor: pointer;}
.Icon{
    margin: 5px;
}
`
export const NavMenu =styled.div`
display: grid;
place-items: center;
grid-template-columns: repeat(3,1fr);

color: white;

`
export const MenuItem =styled(Link)`
cursor: pointer;
text-decoration: none;
color: white;
padding: 2rem 4rem;

transition: .5s ease-in;

:hover{
    background-color: white;
    color: black;
}
`
export const NavSearch =styled.div`

display:grid;
grid-template-columns: 3fr 1fr;
place-items: center;
padding: 5px 3px;
max-width: 200px;


background-color:#292f36;
border: 2px solid rgba(255,255,255,.3);
border-radius: 5px;

.icon{
    color: white;
    :hover{cursor: pointer;}
}
`

export const SearchBar=styled.input`
all: unset;
width: 100%;
color: white;

`