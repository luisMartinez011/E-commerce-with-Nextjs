import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { SiGmail } from "react-icons/si"

const Footer = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container disableGutters={true} maxWidth={false} sx={{
                position: "absolute",
                bottom: 0,
                bgcolor: '#cfe8fc',
                height: 100,
                width: "100vw",
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    height:100,
                    margin:0,
                    padding:0
                }} >
                    <Typography>
                        Paged created by Luis Martinez
                    </Typography>
                    <AiFillGithub size="50" style={{

                    }}></AiFillGithub>
                    <AiFillLinkedin size="50"></AiFillLinkedin>
                    <SiGmail size="50"></SiGmail>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Footer 