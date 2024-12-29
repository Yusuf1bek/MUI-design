import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © {new Date().getFullYear()} My Recipe App
                </Typography>
                <Link href="/about" color="inherit" style={{ marginLeft: 'auto' }}>
                    About
                </Link>
                <Link href="/contact" color="inherit" style={{ marginLeft: '20px' }}>
                    Contact
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;