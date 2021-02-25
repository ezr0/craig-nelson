import styled from 'styled-components';

export const StyledTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    cursor: pointer;

    .centered:hover {
        unicode-bidi:bidi-override;
        direction:rtl;
    }
`;