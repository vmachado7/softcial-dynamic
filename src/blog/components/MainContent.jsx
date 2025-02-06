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

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate()-1;
  return `${month}/${date}/${year}`;
}

const cardData = [
  {
    img: 'https://es.rollingstone.com/wp-content/uploads/2022/08/Gustavo-petro-la-entrevista-rolling-stone-portada.jpg',
    tag: 'Figura Política',
    title: 'Gustavo Petro',
    description:
      '42.º presidente de la República de Colombia. Actualmente en el cargo desde el 7 de agosto de 2022.',
    authors: [
      { name: 'Reporte disponible', avatar: 'https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-green-check-mark-png-image_6525691.png' },
    ],
  },
  
  {
    img: 'https://assets.editorial.aetnd.com/uploads/2016/11/donald-trump-gettyimages-687193180.jpg',
    tag: 'Figura Política',
    title: 'Donald J. Trump',
    description:
      '45.º y 47.º presidente de los Estados Unidos. Actualmente en el cargo, desde el 20 de enero de 2025',
    authors: [
      { name: 'Reporte en proceso', avatar: 'https://static.vecteezy.com/system/resources/previews/016/774/561/non_2x/loading-icon-loading-progress-icon-on-transparent-background-free-png.png' },
      ],
  },
  {
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2023-12/231221-hbomberguy-youtube-snip-ac-512p-ac9ddd.jpg',
    tag: 'Influencer Digital',
    title: 'Harry Brewis',
    description:
      'Más conocido como Hbomberguy, es un YouTuber y streamer de Twitch británico.',
    authors: [
      { name: 'Reporte en proceso', avatar: 'https://static.vecteezy.com/system/resources/previews/016/774/561/non_2x/loading-icon-loading-progress-icon-on-transparent-background-free-png.png' },
    ],
  },
  {
    img: 'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/000_328V9L4.jpg?h=199d8c1f&itok=wV6gzFZV',
    tag: 'Figura Política',
    title: 'Emmanuel Macron',
    description: "Presidente de la República Francesa. Actualmente en el cargo, desde el 14 de mayo de 2017.",
      authors: [
        { name: 'Reporte disponible', avatar: 'https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-green-check-mark-png-image_6525691.png' },
      ],
    },
    {
      img: 'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2021/06/15/60c8e3ec6b5fb.jpeg',
      tag: 'Influencer Digital',
      title: 'Daneidy Barrera Rojas',
      description:
        'Conocida por su apodo Epa Colombia, es una modelo, influencer y empresaria colombiana.',
      authors: [
        { name: 'Reporte en proceso', avatar: 'https://static.vecteezy.com/system/resources/previews/016/774/561/non_2x/loading-icon-loading-progress-icon-on-transparent-background-free-png.png' },
      ],
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
      <TalentInfo open={open} handleClose={() => setOpen(!open)}/>
      <div>
        <Typography variant="h1" gutterBottom>
          Mis Reportes de Tendencia
        </Typography>
        <Typography>Desde aquí puedes observar todos los reportes que has contratado.
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
            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[0].img}
              sx={{
                aspectRatio: '16 / 9',
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}/>
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
              <Button
                href="/ReportTest"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}>
                Reporte completo
              </Button>
              <br></br>
              <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Chip
                  component={Link}
                  label="Borrar reporte"
                  size="medium"
                  sx={{backgroundColor: 'transparent'}}
                  onClick={(e) => {setOpen(!open)
                  }}/>
              </Box>
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
              <Button
                href="/Report1"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}>
                Reporte completo
              </Button>
              <br></br>
              <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Chip
                  component={Link}
                  label="Borrar reporte"
                  size="medium"
                  sx={{backgroundColor: 'transparent'}}
                  onClick={(e) => {setOpen(!open)
                  }}/>
              </Box>
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
              <Button
                href="/Report1"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}>
                Reporte completo
              </Button>
              <br></br>
              <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Chip
                  component={Link}
                  label="Borrar reporte"
                  size="medium"
                  sx={{backgroundColor: 'transparent'}}
                  onClick={(e) => {setOpen(!open)
                  }}/>
              </Box>
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
              <Button
                href="/Report1"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}>
                Reporte completo
              </Button>
              <br></br>
              <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Chip
                  component={Link}
                  label="Borrar reporte"
                  size="medium"
                  sx={{backgroundColor: 'transparent'}}
                  onClick={(e) => {setOpen(!open)
                  }}/>
              </Box>
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
              <Button
                href="/Report1"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}>
                Reporte completo
              </Button>
              <br></br>
              <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Chip
                  component={Link}
                  label="Borrar reporte"
                  size="medium"
                  sx={{backgroundColor: 'transparent'}}
                  onClick={(e) => {setOpen(!open)
                  }}/>
              </Box>
            </SyledCardContent>
            <Author authors={cardData[4].authors} />
          </SyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}
