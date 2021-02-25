import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks/hooks';

import { Burger } from '../components/burger/Burger';
import { Menu } from '../components/menu/Menu';
import { Content } from '../components/content/Content';

const Home = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(null); 

    useOnClickOutside(node, () => setOpen(false));

    return (
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <Content />
        </div>
    )
}

export { Home };