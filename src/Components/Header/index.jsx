import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Search from './Search';
import MobileNav from './NavLinks/Mobile';
import DesktopNav from './NavLinks/Desktop';
import { Paper } from '@mui/material';
import LoginButton from "./LoginButton"
import logo from "../../logo.svg"

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <Paper>
            <Box position="static">
                <Container maxWidth="lg">
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }} disableGutters>
                        <MobileNav />
                        <img src={logo} width="100px" />
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ marginRight: "10px" }}>
                                <Search />
                            </div>
                            <LoginButton title={"Log In"} />
                        </div>
                    </Toolbar>
                </Container>
            </Box>
            <Box position="static" sx={{ display: { xs: 'none', md: 'block' } }}>
                <Container maxWidth="md">
                    <Toolbar disableGutters>
                        <DesktopNav />
                    </Toolbar>
                </Container>
            </Box>
        </Paper>

    )
}

export default Header;