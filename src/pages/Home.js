import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link'; 
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../layouts/ListItems';
import FeatureBox from '../components/Featurebox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListBox from '../components/Listbox';
import Chart from '../components/Chart';
import CalltoActionBar from '../components/Calltoactionbar';
// import LogoutIcon from '@mui/icons-material/Logout';
import Copyright from '../layouts/Footer';
// import Chart from './Chart';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{ backgroundColor: '#0b1431' }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              SILK ROAD
            </Typography>
            <IconButton color="inherit" sx={{ p: 3 }}>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
                <AccountCircleIcon />
            </IconButton>
            {/* <IconButton color="inherit">
                <LogoutIcon />
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto', 
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Invoices Box */}
              <FeatureBox 
                title="My Invoices" />
              
              {/* Due Payment Box */}
              <Grid item xs={12} md={4} lg={3} order={{xs: 1}}>
                <Paper
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 285,
                    boxShadow: 5
                  }}
                >
                  <Typography 
                    component="h2" 
                    variant="h5" 
                    align='center'
                    fontWeight='bold'
                    paddingBottom={1} 
                    color='#0b1431'
                    gutterBottom>
                      Total Outstanding
                  </Typography>
                  <Typography component="p" variant="h4" color="text.secondary" align='center'>
                    $3,024.00
                  </Typography>
                  <Typography color="text.secondary" align='center'>
                    on 15 March, 2019
                  </Typography>
                  <Link color="primary" align='center' href="#" sx={{ flex: 1 }}>
                    View Details
                  </Link>
                    <Button 
                      variant="contained"
                      size="large"
                      sx={ { borderRadius: 28, m: 4 } }
                      >Pay Now
                    </Button>
                    {/* <ActionButton /> */}
                </Paper>
              </Grid>
              {/* My Documents */}
              <FeatureBox 
                title="My Documents" />
            </Grid>
              {/* Pending Documents to be Signed */}
              <ListBox title="Pending Documents to be Signed" />
                 {/* How My Services are Performing */}
                <Grid item xs={12}>
                    <Paper sx={{ mt: 3, p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Chart title="How My Services are Performing" />
                    </Paper>
                </Grid>
                {/* Call to Action Bar */}
                  <CalltoActionBar />
          </Container>
          {/* Footer */}
          <Copyright sx={{ p: 4 }} />
        </Box>
        
      </Box>
      
    </ThemeProvider>
  );
}

export default DashboardContent;