import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardPrimary() {
    return (
        <Card style={{ border: "none" }} variant="outlined" >
            <CardContent style={{ border: "none" }}>
                <Typography variant="h5" component="div">
                    Transitional Update : CLIC to CCOS
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti sapiente cum ducimus? Possimus facilis amet expedita repellendus assumenda! Quis praesentium nulla provident sequi perferendis nihil ad debitis! Mollitia, alias.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti sapiente cum ducimus? Possimus facilis amet expedita repellendus assumenda! Quis praesentium nulla provident sequi perferendis nihil ad debitis! Mollitia, alias.
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
