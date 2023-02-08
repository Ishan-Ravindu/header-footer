import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import LearnMoreCard from "./LearnMoreCard";


export default function LearnMore() {


    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <LearnMoreCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <LearnMoreCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <LearnMoreCard />
                </Grid>
            </Grid>
        </Container>
    );
}
