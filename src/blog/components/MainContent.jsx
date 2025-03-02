import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TalentInfo from './TalentInfo';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Link from '@mui/material/Link';
//import {crearInforme, obtenerInformes} from './reportsconection'


const cardData = [
  {
    img: 'https://img.freepik.com/premium-photo/question-mark-concept-science-technology-questions-answers-internet_700226-1714.jpg',
    tag: 'Bienvenido/a!',
    title: 'Aun no tienes informes generados!',
    description:
      'Si despúes de 2 dias aun no aparecen tus informes:',
    authors: [],
  },
];

const SyledCard = styled(Card)(({ theme, $hovered, $focused }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  // el filter en comment es para activar las noticias de manera borrosa
  //filter: $hovered ? 'none' : 'blur(2px)',
  transition: 'filter 0.3s',
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    filter: 'none',
  },
  '&.Mui-focused': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const handleClose = () => { setOpen(false); };

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [open, setOpen] = React.useState(false);
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  const [hoveredCardIndex, setHoveredCardIndex] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
  };
  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Mis reportes
        </Typography>
        <Typography>
          Desde aqui puedes acceder al reporte generado el dia de ayer a tu tendencia de interés.
        </Typography>
      </div>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            $focused={focusedCardIndex === 0}
            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}>
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[0].img}
              sx={{
                aspectRatio: '16 / 9',
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[0].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[0].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[0].description}
              </StyledTypography>
              <Chip
                component="a"
                href="https://montenegrodanielfelipe.com/softcial/contact/"
                label="Contáctanos!"
                size="large"
                target="_blank"
                sx={{
                  backgroundColor: 'transparent',
                  border: 'none',}}/>
            </SyledCardContent>
            <Author authors={cardData[0].authors} />
          </SyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}
