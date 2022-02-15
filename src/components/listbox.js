import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; 
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FileOpenIcon from '@mui/icons-material/FileOpen';


export default function ListBox(props) {
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
                                    <FileOpenIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                            </ListItemButton>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>  
                            <ListItemButton>
                                <ListItemIcon>
                                    <FileOpenIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                            </ListItemButton>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>  
                            <ListItemButton>
                                <ListItemIcon>
                                    <FileOpenIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                            </ListItemButton>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item> 
                            <ListItemButton>
                                <ListItemIcon>
                                    <FileOpenIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                            </ListItemButton>
                        </Item>
                    </Grid>
                </Grid>
               
            </Paper>
        </Grid>

    );
  }


