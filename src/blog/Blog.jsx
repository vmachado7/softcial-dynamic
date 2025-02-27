import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AppTheme from '../shared-theme/AppTheme';

export default function Blog(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <MainContent />
      </Container>
      <Divider sx={{ my: 4 }} /> {}
      <Footer />
    </AppTheme>
  );
}
