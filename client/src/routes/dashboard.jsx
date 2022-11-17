import { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProjectBoard from '../components/project-board/projects-board';
import UpdateList from '../components/update-list/update-list';

export async function loader() {
  return [
    {
      id: 1,
      name: 'Create Contact Form',
      created_at: Date.now(),
      updated_at: Date.now(),
      project: 'Wordla',
      description: 'blalallala',
      status: 'in progress',
      tasks: [
        {
          name: 'Create Inputs',
          description: 'assasassa',
          est_duration: 11121212,
          comp_duration: 445454,
          status: 'in progress'
        }
      ]
    },
    {
      id: 2,
      name: 'Create Subpage PSD',
      created_at: Date.now(),
      updated_at: Date.now(),
      project: 'Panorama',
      description: 'asdasdasdsa',
      status: 'not started',
      tasks: [
        {
          name: 'Subpage',
          description: 'asdasdsad',
          est_duration: 1214343,
          comp_duration: 34132,
          status: 'not started'
        }
      ]
    },
    {
      id: 3,
      name: 'Layout&implementation in HTML&CSS',
      created_at: Date.now(),
      updated_at: Date.now(),
      project: 'Ebay relaunch',
      description: 'vbhbhhbh',
      status: 'in progress',
      tasks: [
        {
          name: 'Creating the context',
          description: 'asdasdsad',
          est_duration: 1214343,
          comp_duration: 34132,
          status: 'in progress'
        }
      ]
    },
   
  ];
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3, height: '100%'  }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Dashboard () {
  const projects = useLoaderData();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{display: 'flex', height: 'calc(100vh - 112px)' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value}
            textColor="primary" 
            indicatorColor="primary"
            onChange={handleChange}
          > 
            <Tab label="Active Projects" />
            <Tab label="Messenger" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} style={{ height: 'calc(100% - 49px)' }}>
          <Box sx={{ display: 'flex', height: '100%' }}>
            <ProjectBoard projects={projects}></ProjectBoard>
            <UpdateList></UpdateList>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Here will messages
        </TabPanel>
      </Box>
    </div>
  )
}