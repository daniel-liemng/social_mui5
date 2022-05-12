import {
  Box,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Feed, Navbar, Rightbar, Sidebar, Add } from './components';

const App = () => {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#6d597a',
      },
      secondary: {
        main: '#90be6d',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
