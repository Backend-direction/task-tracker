import { styled } from '@mui/material/styles';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import LoopIcon from '@mui/icons-material/Loop';

import './accordion-details.css';
import BadgeAvatar from '../avatar/avatar';

const Details = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  background: '#f8f8f8',
  display: 'flex',
  justifyContent: 'space-between'
}));

export default function AccordionDetails({ story }) {
  const date = new Date(story.updated_at);
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const sinceLastUpdate = `Today,${hour}:${minutes}:${seconds} PM`

  const handleClick = () => {};

  return (
    <Details>
      <Box className="details__info">
        <Box className='details__progress'>23%</Box>
        <Typography variant="caption">{story.name}</Typography>
      </Box>
      <Box className="details__action">
        <BadgeAvatar height='30px' width='30px' />
        <Chip 
          icon={<LoopIcon className='details__refresh' />}
          sx={{ mx: 1 }}
          onClick={handleClick}
          label={sinceLastUpdate}
          variant="outlined" 
        />
        <Avatar className='details__avatar'>
          <SearchOutlinedIcon className='details__find-task'/>
        </Avatar>
      </Box>
    </Details>
  )
}