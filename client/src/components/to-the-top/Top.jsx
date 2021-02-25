import Logo from '../../images/skull.png';
import { Link } from 'react-scroll';

import { StyledTop } from './Top.styled';

const Top = () => {
    return (
        <StyledTop>
            <Link to='home' spy={true} smooth={true}><img src={Logo} alt=''/></Link>
            <div className='centered'>To-the-top!</div>
        </StyledTop>
    )
}

export { Top };