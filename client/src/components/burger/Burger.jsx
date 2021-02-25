import React from 'react';
import { bool, func } from 'prop-types';

import { StyledBurger } from './Burger.styled';
import Logo from '../../images/skull.png';


const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div id='home'>
                <img src={Logo} alt='Craig Nelson' />
            </div>
        </StyledBurger>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
}

export { Burger };