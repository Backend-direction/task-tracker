import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ProjectCard from '../project-card/project-card';

const fabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16,
}

const emptyStyle = {
  width: '100%',
  height: 'calc(100vh - 88px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function ProjectList ({ projects, handleClickOpen }) {
  const buildProjectList  = (projects) => {
    return projects.map((project, index) => {
        return (       
          <Grid item xs={2} sm={4} md={4} lg={4} xl={3} key={index}>
            <ProjectCard 
              project={project}
            />
          </Grid>
        )
      })
    }

  const buildEmptyList = () => {
    return (
      <div style={emptyStyle}>There are no projects yet</div>
    )
  }

  return (
      <Grid 
        container 
        spacing={{ xs: 2, md: 3, lg: 4 }}
        columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 12 }}
      >
        { 
          projects.length ? buildProjectList(projects) : buildEmptyList()
        }
      <Fab 
        color="primary" 
        aria-label="add" 
        sx={fabStyle}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
    </Grid>
  );
}