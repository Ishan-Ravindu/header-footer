import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardPrimary({ title, description, handleLearnMoreButtonClick }) {
    return (
        <Card style={{ border: "none" }} variant="outlined" >
            <CardContent style={{ border: "none" }}>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleLearnMoreButtonClick} size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
