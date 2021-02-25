import styled from 'styled-components';

const ContactStyled = styled.div`
        grid-column: 2;
        grid-row: 3;

        &--form {
            display: flex;
            flex-direction: column;
            padding: 2rem;
        }

        .form__field {
            font-family: inherit;
            font-weight: 100;
            width: 100%;
            border: 0;
            outline: 0;
            font-size: 1.3rem;
            border-bottom: 0.1rem solid ${({ theme }) => theme.gold};
            color:  ${({ theme }) => theme.white};
            padding: 1rem 0;
            background: transparent;
            transition: border-color 0.2s;

            ::placeholder {
                color: ${({ theme }) => theme.white};
            }
        }
`;

export { ContactStyled };