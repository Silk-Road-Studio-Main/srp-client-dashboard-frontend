import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; 
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LandscapeIcon from '@mui/icons-material/Landscape';
import InsightsIcon from '@mui/icons-material/Insights';
import GavelIcon from '@mui/icons-material/Gavel';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';

function FeatureBoxes(props) {
    
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    boxShadow: 'none',
    textAlign: 'right',
    color: theme.palette.text.primary,
  }));
  
    return (
        <Grid item xs={12} md={8} lg={9} order={{xs: 2, md: 1, lg: 1}}>
            <Box sx={{ bgcolor: '#0b1431', color: 'primary.contrastText', py: 1, px:4 }}>
            {props.title}
            </Box>
            <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
            }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Item> 
                            <ListItemButton>
                                <ListItemIcon>
                                    <AssignmentIndIcon />
                                </ListItemIcon>
                                <ListItemText primary="Company Secretarial" />
                            </ListItemButton>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>  
                            <ListItemButton>
                                <ListItemIcon>
                                    <LocalAtmIcon />
                                </ListItemIcon>
                                <ListItemText primary="Financial" />
                            </ListItemButton>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item> 
                            <ListItemButton>
                                <ListItemIcon>
                                    <LandscapeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Real Estate" />
                            </ListItemButton>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item> 
                            <ListItemButton>
                                <ListItemIcon>
                                    <InsightsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Research" />
                            </ListItemButton>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item> 
                            <ListItemButton>
                                <ListItemIcon>
                                    <GavelIcon />
                                </ListItemIcon>
                                <ListItemText primary="Legal Outsource" />
                            </ListItemButton>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item> 
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonAddAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="HR Outsource" />
                            </ListItemButton>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item> 
                            <ListItemButton>
                                <ListItemIcon>
                                    <ColorLensIcon />
                                </ListItemIcon>
                                <ListItemText primary="Studio" />
                            </ListItemButton>
                        </Item>
                    </Grid>
                </Grid>
    
               
            </Paper>
        </Grid>

    );
  }

  export default FeatureBoxes;

