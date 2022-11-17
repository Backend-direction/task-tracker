import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Typography } from '@mui/material';

import BadgeAvatar from '../avatar/avatar';
import './update-list.css';

export default function UpdateList (props) {
  // const { lastUpdates } = props;
  return (
    <List className='update-list__container' sx={{ bgcolor: 'background.paper' }}>
      {
        [1,2,3,4,5,6,7,8,9].map((item, index) => {
          return (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <BadgeAvatar />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Mark p.
                      </Typography>
                      {"add an image into wordla"}
                      <Typography sx={{ display: 'block' }} component="span" >
                        Today, 10:20 PM
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          )
        })
      }
    </List>
  )
}