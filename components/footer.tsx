import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import Link from '@mui/material/Link';

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
                    height: 100,
                    margin: 0,
                    padding: 0
                }} >
                    <Typography>
                        Paged created by Luis Martinez
                    </Typography>

                    <Link href="https://github.com/luisMartinez011" target="_blank">
                        <AiFillGithub size="50" ></AiFillGithub>
                    </Link>

                    <Link href="https://www.linkedin.com/in/luismartinez011/" target="_blank">
                        <AiFillLinkedin size="50"></AiFillLinkedin>
                    </Link>

                    <Link href="mailto:tauroluiseduardo@gmail.com" target="_blank">
                        <SiGmail size="50"></SiGmail>
                    </Link>


                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Footer 