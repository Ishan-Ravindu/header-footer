import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardPrimary from "./CardPrimary";
import CardSecondary from "./CardSecondary";



export default function Events() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid Paper xs={12} md={8}>
                        <h3 style={{ color: "orange" }}>Announcements & Events</h3>
                    </Grid>
                    <Grid Paper xs={12} md={4}>
                        <h3>Upcoming events</h3>
                    </Grid>
                    <Grid Paper xs={12} md={4}>
                        <CardPrimary />
                        <Button variant="outlined" size="small">Archive</Button>
                    </Grid>
                    <Grid Paper xs={12} md={4}>
                        <CardPrimary />
                    </Grid>
                    <Grid Paper xs={12} md={4}>
                        <CardSecondary />
                        <CardSecondary />
                        <div style={{ display: "flex", justifyContent: "center" }}><Button variant="contained" size="small">More Events</Button></div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}