import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardPrimary from "./CardPrimary";
import CardSecondary from "./CardSecondary";



export default function Events() {
    const handleLearnMoreButtonClick = () => {
        console.log("Learn More")
    }
    const handleArchiveClick = () => {
        console.log("archive")
    }
    const handleMoreEventClick = () => {
        console.log("more events")
    }
    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <h3 style={{ color: "orange", paddingLeft: "15px" }}>Announcements & Events</h3>
                        <Grid container>
                            <Grid item md={6}>
                                <CardPrimary handleLearnMoreButtonClick={handleLearnMoreButtonClick} title={"Transitional Update : CLIC to CCOS"} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti sapiente cum ducimus? Possimus facilis amet expedita repellendus assumenda! Quis praesentium nulla provident sequi perferendis nihil ad debitis! Mollitia, alias.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti sapiente cum ducimus? Possimus facilis amet expedita repellendus assumenda! Quis praesentium nulla provident sequi perferendis nihil ad debitis! Mollitia, alias." />
                            </Grid>
                            <Grid item md={6}>
                                <CardPrimary handleLearnMoreButtonClick={handleLearnMoreButtonClick} title={"Transitional Update : CLIC to CCOS"} description="                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti sapiente cum ducimus? Possimus facilis amet expedita repellendus assumenda! Quis praesentium nulla provident sequi perferendis nihil ad debitis! Mollitia, alias.                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti sapiente cum ducimus? Possimus facilis amet expedita repellendus assumenda! Quis praesentium nulla provident sequi perferendis nihil ad debitis! Mollitia, alias." />
                            </Grid>
                        </Grid>
                        <div style={{ display: "flex", justifyContent: "start", paddingLeft: "15px" }}><Button variant="outlined" size="small" onClick={handleArchiveClick}>Archive</Button></div>
                    </Grid>
                    <Grid item md={4}>
                        <h3 style={{ paddingLeft: "15px" }}>Upcoming events</h3>
                        <CardSecondary subHeader={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident eligendi rem fuga? Nesciunt at fugit nulla ex fugiat omnis voluptate voluptatem eveniet tenetur sapiente. Ducimus quae eligendi iusto quibusdam."} title={"Shrimp and Chorizo Paella"} day={1} month={"Dec"} />
                        <CardSecondary subHeader={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident eligendi rem fuga? Nesciunt at fugit nulla ex fugiat omnis voluptate voluptatem eveniet tenetur sapiente. Ducimus quae eligendi iusto quibusdam."} title={"Shrimp and Chorizo Paella"} day={1} month={"Dec"} />
                        <div style={{ display: "flex", justifyContent: "center" }}><Button onClick={handleMoreEventClick} variant="contained" size="small">More Events</Button></div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}