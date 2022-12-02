import { styled } from '@mui/material/styles';
import { 
  Paper,
} from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  minWidth: '345px',
  height: '56px',
}));

export const createDetailsItems = (project) => {
  return [
    {
      title: 'Project title',
      content: project.name,
      reactFragment: project.image
    },
    {
      title: 'Product owner',
      content: project.product_owner,
      productOwner: project.product_owner
    },
    {
      title: 'Team',
      content: project.team,
      productOwner: project.team_photo
    }
  ]
}