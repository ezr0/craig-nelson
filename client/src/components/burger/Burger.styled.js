import styled from 'styled-components';

export const StyledBurger = styled.button`
    position: absolute;
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  
    &:focus {
        outline: none;
    }
  
    div {
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        margin-top: 2rem;

        :first-child {
            transform: ${({ open }) => open ? 'rotate(30deg)' : 'rotate(0)'};
        }
    }
`;