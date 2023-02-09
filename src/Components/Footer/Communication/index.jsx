import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CustomAvatar from './CustomAvatar';
import CampaignIcon from '@mui/icons-material/Campaign';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForumIcon from '@mui/icons-material/Forum';



function Communication() {
    return (
        <Box>
            <Grid container spacing={2} style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
                <Grid item xs={12} md={4}>
                    <h1>Communication connections</h1>
                    <p>Subscribe to our newslatter or follow us on social media to stay updated on the latest news from NCATS and CTSA hubs</p>
                </Grid>
                <Grid item xs={6} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CustomAvatar icon={<CampaignIcon style={{ fontSize: "50px" }} />} description={"subtribe to the article newsletter"} />
                </Grid>
                <Grid item xs={6} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CustomAvatar icon={<TwitterIcon style={{ fontSize: "50px" }} />} description={"Follow us on Twitter"} />
                </Grid>
                <Grid item xs={6} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CustomAvatar icon={<LinkedInIcon style={{ fontSize: "50px" }} />} description={"connect on LinkedIn"} />
                </Grid>
                <Grid item xs={6} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CustomAvatar icon={<ForumIcon style={{ fontSize: "50px" }} />} description={"Join A discussions forum"} />
                </Grid>
            </Grid>
        </Box>
    )

}

export default Communication;