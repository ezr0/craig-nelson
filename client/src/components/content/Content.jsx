import React from 'react';
import { Contact } from '../contact-form/Contact';
import { Top } from '../to-the-top/Top';

import { ContentStyled } from './Content.styled';

import Me from '../../images/me.jpg';

const Content = () => {
    const about = () => {
        return (
            <div className='about-me__info'>
                <img src={Me} alt='me' />
                <h1>I'm Craig,</h1>
                <p>
                    A frontend developer from swansea, uk.
                </p>
                <p>
                    I've been working as a developer for over 10 years but commercially 5 or so.
                </p>
                <p>
                    I'm currently working in React.js with an interest in node.js. This website funny enough
                    is written and being served to you with a node js backend :)
                </p>
                <p>
                    I made this just to show off my design skills and technical skills in react. Its 
                    using functional react components with react hooks and tied nicely with styled components.
                </p>
            </div>
        )
    }

    const work = () => {
        return (
            <div id='work' className='about-me__work'>
                <h1>My work!</h1>
                <Top />
            </div>
        )
    }

    return (
        <ContentStyled>
            <div className='about-me'>
                {about()}
                {work()}
                <Contact />
            </div>
        </ContentStyled>
    )
}

export { Content };