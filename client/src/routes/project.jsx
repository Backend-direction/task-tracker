import { useState } from 'react'; 
import { useLoaderData } from "react-router-dom";
import { 
  Container, 
} from '@mui/material';
import buildClient from '../api/buildClient';
import ProjectInfoTable from '../components/project-info-table';
import ProjectDetailsPlate from '../components/project-details-plate';

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

export default function Project () {
  const [project] = useState(useLoaderData());

  return (
    <Container maxWidth='false'>

      <ProjectDetailsPlate project={project} />

      <ProjectInfoTable />

    </Container >
  )
}