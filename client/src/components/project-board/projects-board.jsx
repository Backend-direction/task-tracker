import Box from '@mui/material/Box';
import './projects-board.css';
import CustomizedAccordions from '../accordion/accordion';

export default function ProjectBoard (props) {
  const { projects } = props;
  
  return (
    <Box className='projects-board__container'>
      <CustomizedAccordions projects={projects} />
    </Box>
  )
}