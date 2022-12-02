import { 
  Avatar,
  Grid,
  Typography,
  Box
} from '@mui/material';
import { Item } from './styles';
import { createDetailsItems } from './utils';


const renderDetailsItem = ({ title, content, avatar }) => (
  <Grid 
    item xs={12} sm={12} md={12} lg={4} xl={4}
    key={title}
  >
    <Item>
      <Typography variant="h6" pr={2}>
        {title}:
      </Typography>
      <Typography pr={2}>
        {content} 
      </Typography>
      <Avatar alt={avatar} sx={{ marginRight: '15px', width: 56, height: 56 }} src={`/api/${avatar}`} /> 
    </Item>
  </Grid>
);

const ProjectDetailsPlate = ({ project }) => {
  const detailsItems = createDetailsItems(project);
  console.log(detailsItems)
  return (
    <Box px={3} mb={3} sx={{ border: '1px solid #c1c1c1', borderRadius: '4px' }}>
      <Typography variant="h4" mt={4} mb={3}>Project information page</Typography>
      <Grid 
        container 
        item 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowGap={{xs: 1}}
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