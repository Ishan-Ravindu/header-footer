import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import img from "../../../logo.svg"
import { Grid } from '@mui/material';

export default function LearnMoreCard() {
    return (
        <Card >
            <Grid container>
                <Grid item xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={img}
                        alt="Live from space album cover"
                    />
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid saepe, deserunt assumenda corporis quis sint doloremque laborum.
                            </Typography>
                        </CardContent>
                    </Box>
                </Grid>
            </Grid>

            <CardActions>
                <Button size="small">Learn More . . .</Button>
            </CardActions>
        </Card>
    )
}
