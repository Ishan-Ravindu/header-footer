import { Paper } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

export default function Footer() {
    return (
        <Paper>
            <Container maxWidth="lg">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span >This web site developed and maintained by <a href='#'>Digital Infuzion, Inc</a></span>

                </div>
            </Container>
        </Paper>
    )
}
