import { useState } from 'react'; 
import { useLoaderData } from "react-router-dom";
import { 
  Container, 
} from '@mui/material';
import buildClient from '../api/buildClient';
import ProjectInfoTable from '../components/project-info-table';
import ProjectDetailsPlate from '../components/project-details-plate';

export async function loader(urlParams) {
  const { params } = urlParams;
  const client = buildClient();

  try {
    const { data } = await client.get(`/api/v1/project/${params.project_id}`);

    return data;
  } catch (e) {
    console.error('Project loader', e);

    return null;
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