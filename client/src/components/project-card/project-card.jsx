import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '../rating/rating';
import CardPreview from '../card-preview/card-preview';
import Box from '@mui/material/Box';

export default function ProjectCard({ project }) {
  const src = project.image ? `/api/${project.image}` : '';

  return (
    <Card sx={{ maxWidth: 345, minWidth: 200 }}>
      <CardActionArea>
        <CardPreview src={src} height='140'/>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="div" 
              noWrap 
            >
              {project.name}
            </Typography>
            <Rating />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}