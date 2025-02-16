import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';
import AppTheme from '../../shared-theme/AppTheme';
import FAQS from './FAQS';

export default function Blog(props) {
    return (
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
        >
          <FAQS />
        </Container>
        <Footer />
      </AppTheme>
    );
  }
  