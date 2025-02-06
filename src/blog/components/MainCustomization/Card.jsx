import React from 'react';
import { CardMedia, Typography, Chip, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { SyledCard, SyledCardContent, StyledTypography, Author } from './StyledComponents';

const Card = ({ cardData, index, hoveredCardIndex, handleMouseEnter, handleMouseLeave, focusedCardIndex, handleFocus, handleBlur }) => (
  <SyledCard
    variant="outlined" 
    $hovered={hoveredCardIndex === index}
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
    onFocus={() => handleFocus(index)}
    onBlur={handleBlur}
    tabIndex={0}
    className={focusedCardIndex === index ? 'Mui-focused' : ''}
  >
    {cardData.img && (
      <CardMedia
        component="img"
        alt={cardData.title}
        image={cardData.img}
        sx={{
          aspectRatio: '16 / 9',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      />
    )}
    <SyledCardContent>
      <Typography gutterBottom variant="caption" component="div">
        {cardData.tag}
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        {cardData.title}
      </Typography>
      <StyledTypography variant="body2" color="text.secondary" gutterBottom>
        {cardData.description}
      </StyledTypography>
    </SyledCardContent>
    {index === 0 && (
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Chip
          component={Link}
          to="/terms"
          label="Read more..."
          size="medium"
          sx={{
            backgroundColor: 'transparent',
            border: 'none',
          }}
        />
      </Box>
    )}
    <Author authors={cardData.authors} />
  </SyledCard>
);

export default Card;