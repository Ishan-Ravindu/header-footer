import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styles from "./Desktop.module.css"

const pages = ['Home', 'About', 'CTSA Group and Meetings', 'Resources', 'News'];

function DesktopNav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Container maxWidth="lg">

            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "space-around" }}>
                {pages.map((page) => (
                    <span
                        className={styles.button}
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        {page}
                    </span>
                ))}
            </Box>
        </Container>
    );
}

export default DesktopNav;