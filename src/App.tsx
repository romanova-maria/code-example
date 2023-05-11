import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes/theme';
import { Layout } from './components/Layout';
import { ButtonDemonstration } from './pages/ClicksGame';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <ButtonDemonstration />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
