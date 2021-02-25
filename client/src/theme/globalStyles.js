import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:&display=swap');

    html, body {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #1d1d1d;
        font-family: 'Montserrat', sans-serif;
    }

    input[type=submit] {
        font-family: 'Montserrat', sans-serif;
        margin-top: 2rem;
        background: ${({ theme }) => theme.gold};
        height: 3rem;
        min-width: 10rem;
        border: none;
        border-radius: 0.1rem;
        color: ${({ theme }) => theme.black};
        
        position: relative;
        transition: 1s;         

        text-align: center;
    }

    h1 {
        color: ${({ theme }) => theme.gold};
        margin: 0;
        font-weight: 100;
    }

    p {
        margin: 0;
    }

    @keyframes animation {
        100%{
            background-position:0px -3000px;
        }
    }
`;

export { GlobalStyle };