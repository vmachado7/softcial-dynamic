import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from './Card';
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

const CardGrid = ({ cardData }) => (
    <Grid container spacing={2} columns={12}>
        {cardData.map((card, index) => (
            <Grid key={index} size={{ xs: 12, md: index === 2 || index === 5 ? 4 : 6 }}>
                <Card
                    cardData={card}
                    index={index}
                    hoveredCardIndex={hoveredCardIndex}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    focusedCardIndex={focusedCardIndex}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                />
            </Grid>
        ))}
    </Grid>
);

export default CardGrid;