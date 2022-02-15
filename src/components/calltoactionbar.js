import { Container, Box, Grid, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function CalltoActionBar() {
    return(
        <Box mt={3}>
            <Container maxWidth="lg" sx={{bgcolor: '#0b1431', color: 'secondary.contrastText'}}>
                <Grid>
                    <Typography variant="h4" align="center" padding={4} component="h2">
                        Are you interested in our other services too?
                    </Typography>
                    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', pb: 4 }}>
                        <Button variant="contained" sx={ { borderRadius: 28 } }>Learn More</Button>
                        <Button variant="outlined" sx={ { borderRadius: 28 } }>Contact Us</Button>
                    </Stack>
                </Grid>
            </Container>
        </Box>
    );
}