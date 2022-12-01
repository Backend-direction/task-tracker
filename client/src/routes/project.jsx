import { useState } from 'react'; 
import { useLoaderData } from "react-router-dom";
import { 
  Box, 
  Container, 
  Avatar,
  Paper,
  Grid,
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
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Project () {
  const [project, saveProject] = useState(useLoaderData());
  console.log('pr', project)
  return (
    <Container maxWidth='false'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '50px',
        }}
      >
        <Grid container spacing={2}>
          <Grid 
            item 
            xs={4}
            sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}
          >
            <Item>
             Project title:
            </Item>
          </Grid>
          <Grid 
            item 
            xs={8}             
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            {project.name}
          </Grid>

          <Grid 
            item 
            xs={4} 
            sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}
          >
            <Item>
              Product owner:
            </Item>
          </Grid>
          <Grid 
            item
            xs={8}
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
              {project.product_owner}
              <Avatar alt="Remy Sharp" sx={{ marginRight: '15px' }} src={`api/v1/${project.product_owner}`} />
          </Grid>

          <Grid 
            item 
            xs={4}
            sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}
          >
            <Item>
              Team:
            </Item>
          </Grid>
          <Grid 
            item
            xs={8}
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
              {project.team}
              <Avatar alt="Remy Sharp" sx={{ marginRight: '15px' }} src={`api/v1/${project.team_photo}`} />
          </Grid>
        </Grid>
        <img
          src={`/api/${project.image}`}
          srcSet={`/api/${project.image}`}
          width="200"
          alt={project.name}
          loading="lazy"
        />
      </Box>

      <ProjectInfoTable />
    </Container >
  )
}