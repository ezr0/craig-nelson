import { Home } from './templates/Home';

import { GlobalStyle } from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Home />
        </ThemeProvider>
    );
}

export default App;
