import React from 'react';
import { Container, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import AppAppBar from '../AppAppBar.jsx';
import Footer from '../Footer.jsx';
import AppTheme from '../../../shared-theme/AppTheme';

export default function Report(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 12, gap: 4 }}
      >
        <ReportPage/>
      </Container>
      <Footer />
    </AppTheme>
  );
}

const ReportPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Report Title
      </Typography>
      
      <Box mb={4}>
        <Typography variant="body1" paragraph>
          Report content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies 
          augue nibh quis nisl.
        </Typography>
      </Box>
      
      <Box display="flex" justifyContent="center" mb={4}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="/api/placeholder/400/300"
            alt="image 1"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Image 1 caption
            </Typography>
          </CardContent>
        </Card>
      </Box>
      
      <Box display="flex" justifyContent="center" mb={4}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="/api/placeholder/400/300"
            alt="image 2"  
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Image 2 caption
            </Typography>
          </CardContent>
        </Card>
      </Box>
      
      <Box mb={4}>
        <Typography variant="body1" paragraph>
          Additional report content can go here. Vestibulum id ligula porta felis euismod 
          semper. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur 
          ac, vestibulum at eros.
        </Typography>
      </Box>
      
    </Container>
  );
};
