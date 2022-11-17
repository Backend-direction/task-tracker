import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

export default function CardPreview ({ src = '', height = '100%', width = '100%' }) {
  if(src) {
    return (
      <CardMedia
        component="img"
        height={height}
        width={width}
        image={src}
        alt="project_image"
        sx={{ objectFit: 'contain' }}
      />
    )
  } else {
    const styles = {
      width: "100%",
      height: `${height}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <Box style={styles} >
        No preview
      </Box>
    )
  }
}