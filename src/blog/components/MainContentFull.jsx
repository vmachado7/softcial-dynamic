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


const cardData = [
  {
    img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1242375600.jpg?c=16x9&q=w_1280,c_fill',
    tag: 'Figura Política',
    title: 'Gustavo Petro',
    description:
      'Gustavo Francisco Petro Urrego es un político, economista y actual presidente de Colombia desde el 7 de agosto de 2022.',
    authors: [
      { name: 'Reporte Listo', avatar: 'https://static-00.iconduck.com/assets.00/checkmark-running-icon-2048x2048-8081bf4v.png' },],
  },

  {
    img: 'https://www.iagua.es/sites/default/files/styles/thumbnail-830x455/public/donald-trump-wikipedia_0.jpg?itok=7JCPwkYk',
    tag: 'Figura Política',
    title: 'Danald Trump',
    description:
      'Donald John Trump es un empresario, personalidad televisiva y político conservador​ estadounidense. Miembro del Partido Republicano, es el 47avo presidente de los Estados Unidos desde el 20 de enero de 2025.',
    authors: [
      { name: 'Reporte en proceso...', avatar: 'https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif' },],
  },
  {
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2023-12/231221-hbomberguy-youtube-snip-ac-512p-ac9ddd.jpg',
    tag: 'Influencer',
    title: 'HbomberGuy',
    description:
      'Harry Brewis es un YouTuber y streamer de Twitch británico, productor de videoensayos sobre diversos temas con argumentos de posiciones políticas y económicas de izquierdas.',
    authors: [
      { name: 'Reporte Listo', avatar: 'https://static-00.iconduck.com/assets.00/checkmark-running-icon-2048x2048-8081bf4v.png' },],
  },

  {
    img: 'https://www.publimetro.co/resizer/v2/YQYHMUBL4JDVXHRDKQS6VW5XIA.png?auth=0a4f4e587ea3da38014a1c79a00f50d6013398688941fb6943c0ef180e177c6a&width=1200&height=675&smart=true',
    tag: 'Influencer',
    title: ' Epa Colombia',
    description:
      'Daneidy Barrera Rojas, conocida por su apodo Epa Colombia, es una modelo, influencer y empresaria colombiana.',
    authors: [
      { name: 'Reporte en proceso...', avatar: 'https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif' },],
  },
  {
    img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202412/doge-elon-musk-133335475-16x9.jpg?VersionId=0Kma2biGOtwpaXsihGz1g.RMb8SJCCI3&size=690:388',
    tag: 'Cuerpo del Gobierno de E.E.U.U.',
    title: 'DOGE',
    description:
      'El Departamento de Eficiencia Gubernamental (DOGE por sus siglas en inglés),​ es una comisión asesora presidencial de los Estados Unidos.',
    authors: [
      { name: 'Reporte en proceso...', avatar: 'https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif' },],
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
                  component={Link}
                  href={'/report/1'}
                  label="Ver Reporte"
                  size="large"
                  sx={{
                    backgroundColor: 'transparent',
                    border: 'none',}
                  }/>
            </SyledCardContent>
            <Author authors={cardData[0].authors} />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(1)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[1].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[1].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[1].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[1].description}
              </StyledTypography>
              <Chip
                  component={Link}
                  href={'/report/1'}
                  label="Ver Reporte"
                  size="large"
                  sx={{
                    backgroundColor: 'transparent',
                    border: 'none',}
                  }/>
            </SyledCardContent>
            <Author authors={cardData[1].authors} />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(2)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
            sx={{ height: '100%' }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[2].img}
              sx={{
                height: { sm: 'auto', md: '50%' },
                aspectRatio: { sm: '16 / 9', md: '' },
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[2].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[2].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[2].description}
                </StyledTypography>
              <Chip
                  component={Link}
                  href={'/report/1'}
                  label="Ver Reporte"
                  size="large"
                  sx={{
                    backgroundColor: 'transparent',
                    border: 'none',}
                  }/>
            </SyledCardContent>
            <Author authors={cardData[2].authors} />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}
          >
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(5)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
              sx={{ height: '100%' }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={cardData[3].img}
                sx={{
                  height: { sm: 'auto', md: '50%' },
                  aspectRatio: { sm: '16 / 9', md: '' },
                }}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {cardData[3].tag}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {cardData[3].title}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {cardData[3].description}
                  </StyledTypography>
              <Chip
                  component={Link}
                  href={'/report/1'}
                  label="Ver Reporte"
                  size="large"
                  sx={{
                    backgroundColor: 'transparent',
                    border: 'none',}
                  }/>
            </SyledCardContent>
              <Author authors={cardData[3].authors} />
            </SyledCard>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(4)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
            sx={{ height: '100%' }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[4].img}
              sx={{
                height: { sm: 'auto', md: '50%' },
                aspectRatio: { sm: '16 / 9', md: '' },
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[4].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[4].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[4].description}
                </StyledTypography>
              <Chip
                  component={Link}
                  href={'/report/1'}
                  label="Ver Reporte"
                  size="large"
                  sx={{
                    backgroundColor: 'transparent',
                    border: 'none',}
                  }/>
            </SyledCardContent>
            <Author authors={cardData[4].authors} />
          </SyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}
