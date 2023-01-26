import React from 'react'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import { faVectorSquare ,faSearch} from '@fortawesome/free-solid-svg-icons'
import {MenuItem,Nav,NavContainer,NavLogo,NavMenu,NavSearch,SearchBar} from './NavStyle'
const index = () => {
  return (
    <>
<NavContainer>
    <Nav>
        <NavLogo>
            <div className='Icon'>
        <FontAwesomeIcon icon={faVectorSquare} />

            </div>
            <p>
             PRTS Lorem
            </p>
        </NavLogo>
        <NavMenu>
            <MenuItem to='/'>Operators</MenuItem>
            <MenuItem to='/'>World</MenuItem>
            <MenuItem to='/Stories'>Stories</MenuItem>
        </NavMenu>
        <NavSearch>
            <SearchBar placeholder='search'/>
            <div className='icon'>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </NavSearch>
    </Nav>
</NavContainer>




    </>
  )
}

export default index