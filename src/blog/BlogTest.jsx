import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import AppAppBar from './components/AppAppBar';
import MainContentFull from './components/MainContentFull';
import Footer from './components/Footer';
import AppTheme from '../shared-theme/AppTheme';
import { GoogleLogin } from '@react-oauth/google';

export default function Blog(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <MainContentFull />
      </Container>
      <Divider sx={{ my: 4 }} /> {}
      <Footer />
    </AppTheme>
  );
}
