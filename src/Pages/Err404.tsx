import React from 'react'
import styled from 'styled-components'
import { Conatiner } from '../Components/Pagecss/Pagecss'


const MessageContainer=styled.div`
display: grid;
place-self: center;

place-items: center;
h1{
    color: white;

}
p{
    color: white;
}

`




const Err404 = () => {
  return (
    <><Conatiner>

    <MessageContainer>
<h1>
    ERROR #404 
</h1>
<p>
    Page not found
</p>
    </MessageContainer>
    
    </Conatiner>
    
    </>
  )
}

export default Err404