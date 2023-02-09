import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import LearnMoreCard from "./LearnMoreCard";
import reactLogo from "../../logo.svg"


export default function LearnMore() {


    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
                <Grid item xs={12} md={4}>
                    <LearnMoreCard img={reactLogo} buttonText="Learn More About NCATS" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti sapiente cum ducimus? Possimus facilis amet expedita repellendus assumenda!  " />
                </Grid>
                <Grid item xs={12} md={4}>
                    <LearnMoreCard img={reactLogo} buttonText="Learn More About CTSA" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti sapiente cum ducimus? Possimus facilis amet expedita repellendus assumenda!  " />
                </Grid>
                <Grid item xs={12} md={4}>
                    <LearnMoreCard img={reactLogo} buttonText="Learn More About CCOS" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti sapiente cum ducimus? Possimus facilis amet expedita repellendus assumenda!  " />
                </Grid>
            </Grid>
        </Container>
    );
}
