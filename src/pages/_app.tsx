import { AppProps } from 'next/app';
import GlobalStyle from '@/style/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/style/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
