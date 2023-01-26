import styled from "styled-components";

export const HeroContainer =styled.div`
display: grid;
justify-content: center;
place-items: center;
grid-template-rows: 1fr 1fr 1fr .5
fr 5fr;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


padding: 20px;


height: 100%;
width: auto;
border: 1px solid white;
`
export const HeroIcon =styled.div`
img{
height: 50px;
width: 50px;
object-fit: cover;
}

`
export const HeroTittle=styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

font-size: 3rem;
color: white;

`
export const Divider=styled.div`

width: 100vw;
max-width: 900px;
border-top: 2px solid white;
`

export const SubMenu=styled.div`
color: white;
margin: 20px 0;
h2{
    font-family: 'Courier New', Courier, monospace;
 }
`

export const Slider =styled.div`
height: auto;
width: 1000px;
 display: grid;
 grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
 gap: 10px;

`



export const SliderCard=styled.div`
display: grid;
grid-template-rows: 7fr 1fr 1fr;
place-items: center;
cursor: pointer;


min-width: 200px;
width: 15vw;
max-width: 250px;
transition: .2s ease-in;

:hover{
    transform: scale(1.1);
}
`
export const SliImage=styled.img`

min-height: 200px;
min-width: 200px;

max-height: 250px;
max-width: 250px;

object-fit: cover;
height: 15vw;
width: 15vw;

`
export const SliTittle=styled.div`

text-decoration: none;
text-align: center;
font-size: 1.2rem;
padding: 2px;
width: 95%;
background-color: #232323;
color: white;

`
export const SliSubtxt=styled.div`

color: white;
`