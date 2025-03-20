import { Box, AppBar, Toolbar, Typography, Button, Container,  } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"


const Header : React.FC = () => {
    return (
        <AppBar position="fixed" color="primary">
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    
                    <img src="logo.png" alt="logo" style={{width: 75, height: 75, padding: 2}}/>
                    <Typography variant="h4" sx={{ color: 'secondary.main' }}>
                        Metsä - Myller
                    </Typography>
                    <Box sx = {{ justifyContent: "left",display: 'flex', gap: 1 }}>
                        <Button variant="outlined" color="inherit" component={Link} to="/">
                            Etusivu
                        </Button>
                        <Button variant="outlined" color="inherit" component={Link} to="/palvelut">
                            Palvelut
                        </Button>
                        <Button variant="outlined" color="inherit" component={Link} to="/yhteystiedot">
                            Yhteystiedot
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header