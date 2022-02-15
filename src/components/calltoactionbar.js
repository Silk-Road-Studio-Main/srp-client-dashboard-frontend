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
                    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', pb: 3 }}>
                        <Button variant="contained">Learn More</Button>
                        <Button variant="outlined">Contact Us</Button>
                    </Stack>
                </Grid>
            </Container>
        </Box>
    );
}