import { Paper } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import BottomNav from './BottomNav'
import Communication from './Communication'

export default function Footer() {
    return (
        <Paper>
            <div style={{ backgroundColor: "#A4E1E4" }}>
                <Container maxWidth="lg">
                    <Communication />
                </Container>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#DFE7E3", paddingTop: "10px", paddingBottom: "10px" }}>
                <span ><span style={{ fontSize: "20px" }}>CCOS || </span>Funded By The <a href='#'>National Center for Advancing Transitional Sciences, National Institute of health</a></span>

            </div>
            <div style={{ paddingTop: "20px", paddingBottom: "15px" }}>
                <BottomNav />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "25px" }}>
                <span >This web site developed and maintained by <a href='#'>Digital Infuzion, Inc</a></span>

            </div>
        </Paper>
    )
}
