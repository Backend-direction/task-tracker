import { useState } from 'react'; 
import { useLoaderData } from "react-router-dom";
import { 
  Box, 
  Container, 
  Avatar,
  Paper,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import buildClient from '../api/buildClient';
import ProjectInfoTable from '../components/project-info-table/project-info-table';

export async function loader() {
  const client = buildClient();
  try {
    const { data } = await client.get('/api/v1/project');

    return data;
  } catch (e) {
    console.error('err',e);
    return {
      created_at: "2022-11-15T08:54:16.157Z",
      description: "Vova test",
      id: 35,
      image: "1668502455993-ebaf827da33ee53df0761bee93221ee5.png",
      name:  "Test",
      rate: 0,
      updated_at: "2022-11-15T08:54:16.157Z",
      team: 'Grifindor',
      team_photo: '1668502455993-ebaf827da33ee53df0761bee93221ee5.png',
      product_owner: 'MacGonagel',
      product_owner_photo: '1668502455993-ebaf827da33ee53df0761bee93221ee5.png',
      stories: [
        {
          id: 1,
          title: 'First story'  
        },        {
          id: 2,
          title: 'Second story'
        },        {
          id: 3,
          title: 'Third story'
        },        {
          id: 4,
          title: 'Forth story'
        },
      ]
    };
  }
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  minWidth: '345px',
  height: '56px',
}));

export default function Project () {
  const [project, saveProject] = useState(useLoaderData());
  console.log('pr', project)
  return (
    <Container maxWidth='false'>
      <Grid
        wrap='wrap'
        container
        spacing={{ xs: 2, md: 3, lg: 4 }}
        sx={{ justifyContent: 'center' }}
      >
        <Grid item mb={5}>
          <img
            src={`/api/${project.image}`}
            srcSet={`/api/${project.image}`}
            width="200"
            alt={project.name}
            loading="lazy"
          />
        </Grid>

        <Grid 
          container 
          item 
          spacing={{ xs: 2, md: 3, lg: 4 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
          my={5}
          wrap='wrap'
        >
          <Grid 
            item xs={12} sm={12} md={12} lg={6} xl={4}
          >
            <Item>
              <Typography variant="h6" pr={2}>
                Project title:
              </Typography>
              <Typography pr={2}>
                {project.name} 
              </Typography> 
            </Item>
          </Grid>

          <Grid 
           item xs={12} sm={12} md={12} lg={6} xl={4}
          >
            <Item>
              <Typography variant="h6" pr={2}>
                Product owner: 
              </Typography>  
              <Typography pr={2}>
                {project.product_owner}  
              </Typography>         
              <Avatar alt="Remy Sharp" sx={{ marginRight: '15px' }} src={`api/v1/${project.product_owner}`} />        
            </Item>
          </Grid>
   

          <Grid 
            item xs={12} sm={12} md={12} lg={6} xl={4}
          >
            <Item>
              <Typography variant="h6" pr={2}>
                Team:
              </Typography>
              <Typography pr={2}>
                {project.team}
              </Typography>
              <Avatar alt="Remy Sharp" sx={{ marginRight: '15px' }} src={`api/v1/${project.team_photo}`} />
            </Item>
          </Grid>
        </Grid>

      </Grid>

      <ProjectInfoTable />
    </Container >
  )
}