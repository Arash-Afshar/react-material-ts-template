import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import TemplateView from './views/template/TemplateView';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainLayout>
                <TemplateView />
            </MainLayout>
        </ThemeProvider>
    );
};

export default App;
