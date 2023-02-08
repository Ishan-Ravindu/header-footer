import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';

export default function CustomAvatar({ description, icon }) {
    return (
        <Avatar style={{ width: "160px", height: "160px", backgroundColor: "#196578", paddingTop: "5px" }}>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {icon}
                <a href='#' style={{ padding: "20px", textAlign: "center", fontSize: "16px", color: "white" }}>{description}</a>
            </Box>
        </Avatar >
    )
}
