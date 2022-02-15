import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import QuizIcon from '@mui/icons-material/Quiz';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FileCopyOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Invoices" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AttachMoneyOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Payment History" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="My Docs" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BusinessCenterOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="My Services" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BackupTableOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Miscellaneous 
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Other Services" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <QuizIcon />
      </ListItemIcon>
      <ListItemText primary="FAQ" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PhoneInTalkIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItemButton>
  </React.Fragment>
);