import styled from 'styled-components';

const ContentStyled = styled.div`
    color: ${({ theme }) => theme.white};
    font-weight: 100;

    .about-me {
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: repeat(3, 1fr);
        margin-top: 10rem;
        gap: 5rem;

        &__info {
            display: flex;
            flex-direction: column;
            grid-column: 2;
            grid-row: 1;

            img {  
                margin-bottom: 5rem;
                align-self: center;
                max-width: 25rem;
                border-radius: 15rem;
            }
        }

        &__work {
            grid-column: 2;
            grid-row: 2;
        }
    }
`;

export { ContentStyled };