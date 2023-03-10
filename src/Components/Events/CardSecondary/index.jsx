import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function CardSecondary({ day, month, title, subHeader }) {

    return (
        <Card style={{ border: "none" }} variant="outlined" >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#196578', fontSize: "15px", textAlign: "center" }} >
                        {month}<br /> {day}
                    </Avatar>
                }
                title={title}
                subheader={subHeader}
            />
        </Card>
    )
}
