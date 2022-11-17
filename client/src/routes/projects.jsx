import { useState } from 'react'; 
import { useLoaderData } from "react-router-dom";
import CreateProjectDialog from '../components/create-project-dialog/create-project-dialog';
import buildClient from '../api/buildClient';
import ProjectList from '../components/project-list/project-list';

export async function loader() {
  const client = buildClient();
  try {
    const { data } = await client.get('/api/v1/projects');

    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default function Projects () {
  const [open, setOpen] = useState(false);
  const [projects, addProject] = useState(useLoaderData())

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addNewProject = (project) => {
    addProject(prev => [...prev, project]);
  }
  
  return (
    <>
      <ProjectList 
        projects={projects} 
        handleClickOpen={handleClickOpen}
      />
      <CreateProjectDialog
        open={open}
        handleClose={handleClose}
        addProject={addNewProject}
      />
    </>
  )
}