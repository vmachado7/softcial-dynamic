
const SyledCard = styled(Card)(({ theme, $hovered }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: (theme.vars || theme).palette.background.paper,
    filter: $hovered ? 'none' : 'blur(2px)',
    transition: 'filter 0.3s',
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
      filter: 'none',
    },
    '&:focus-visible': {
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
        <Typography variant="caption">July 14, 2021</Typography>
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