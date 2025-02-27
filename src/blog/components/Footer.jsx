import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <React.Fragment>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
            }}>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Softcial
            </Typography>
            <Link color="text.secondary" variant="body2" href="https://montenegrodanielfelipe.com/softcial/about/">
              Sobre Nosotros
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Legal
            </Typography>
            <Link color="text.secondary" variant="body2" href="https://montenegrodanielfelipe.com/softcial/terms-and-conditions/">
              Terminos y Condiciones
            </Link>
            <Link color="text.secondary" variant="body2" href="https://montenegrodanielfelipe.com/softcial/privacy/">
              Prolítica de Privacidad
            </Link>
            <Link color="text.secondary" variant="body2" href="https://montenegrodanielfelipe.com/softcial/contact/">
              Contáctanos
            </Link>
          </Box>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/vmachado7/softcial-dynamic"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}>
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
