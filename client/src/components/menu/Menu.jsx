import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-scroll';

import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <Link activeClass='active' to='home' spy={true} smooth={true}>Home</Link>
            <Link to='work' spy={true} smooth={true}>Work</Link>
            <Link to='contact' spy={true} smooth={true}>Contact</Link>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export { Menu };