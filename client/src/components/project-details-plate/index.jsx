import { 
  Avatar,
  Grid,
  Typography,
  Box
} from '@mui/material';
import { useStyles } from './styles';
import { Item, createDetailsItems } from './utils';


const renderDetailsItem = ({ title, content, avatar }) => (
  <Grid 
    item xs={12} sm={12} md={12} lg={6} xl={4}
    key={title}
  >
    <Item>
      <Typography variant="h6" pr={2}>
        {title}:
      </Typography>
      <Typography pr={2}>
        {content} 
      </Typography>
      <Avatar alt={avatar} sx={{ marginRight: '15px' }} src={`api/v1/${avatar}`} /> 
    </Item>
  </Grid>
);

const ProjectDetailsPlate = ({ project }) => {
  const detailsItems = createDetailsItems(project);
  const classes = useStyles(); 

  return (
    <Box px={3} mb={3} className={classes.wrapper}>
      <Typography variant="h4" mt={4} mb={3}>Project information page</Typography>
      <Grid 
        container 
        item 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
        mb={5}
        wrap='wrap'
      >
        {detailsItems.map(item => renderDetailsItem(item))}
      </Grid>
    </Box>
  )
}

export default ProjectDetailsPlate;