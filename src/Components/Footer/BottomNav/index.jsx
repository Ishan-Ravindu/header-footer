import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const pages = ['Home', 'Privacy', 'Cookie preferences', 'Contact Us', <TwitterIcon />, <LinkedInIcon />];

export default function BottomNav() {
    return (
        <Container maxWidth="sm">
            <Box style={{ display: 'flex', justifyContent: "space-around" }}>
                {pages.map((page) => (
                    <span
                        key={page}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        {page}
                    </span>
                ))}
            </Box>
        </Container>
    )
}
