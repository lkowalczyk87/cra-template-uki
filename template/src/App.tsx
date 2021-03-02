import React, { Suspense } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { lightTheme } from './features/mui/theme';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import PageSwitcher from 'features/router/pages';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
  },
}));

// AppContent is separated component, so you be able to use i18n translation in AppContent.
const AppContent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='sm'>
      <main className={classes.root}>
        {/* <TodosCard /> */}
        <PageSwitcher />
      </main>
    </Container>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<LinearProgress />}>
        <AppContent />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
