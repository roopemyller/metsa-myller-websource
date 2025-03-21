import { Box, AppBar, Toolbar, Typography, Button, Container, IconButton, Menu  } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import React, {useState} from "react"
import { Link } from "react-router-dom"


const Header : React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position="fixed" color="primary">
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    
                    <img src="logo.png" alt="logo" style={{width: 75, height: 75, padding: 2}}/>
                    <Typography variant="h4" sx={{ color: 'secondary.main' }}>
                        Metsä - Myller
                    </Typography>   
                    {/* Desktop Menu */}
                    <Box sx = {{ justifyContent: "left", gap: 1, display: { xs: 'none', md: 'flex' } }}>   
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

                    {/* Mobile Menu Icon*/}
                    <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={handleMenu} sx={{ display: { md: 'none', xs: 'flex' } }}>
                        <MenuIcon />
                    </IconButton>

                    {/* Mobile Menu */}
                    <Menu 
                        id="menu-appbar" 
                        anchorEl={anchorEl} 
                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} 
                        keepMounted 
                        transformOrigin={{vertical: 'top', horizontal: 'right'}} 
                        open={open} 
                        onClose={handleClose} 
                        sx={{ display: { md: 'none', xs: 'block' }, marginTop: '0.95rem' }}>
                    <Button
                            fullWidth
                            color="inherit"
                            component={Link}
                            to="/"
                            onClick={handleClose}
                            sx={{ justifyContent: 'flex-start', padding: 2 }}
                        >
                            Etusivu
                        </Button>
                        <Button
                            fullWidth
                            color="inherit"
                            component={Link}
                            to="/palvelut"
                            onClick={handleClose}
                            sx={{ justifyContent: 'flex-start', padding: 2 }}
                        >
                            Palvelut
                        </Button>
                        <Button
                            fullWidth
                            color="inherit"
                            component={Link}
                            to="/yhteystiedot"
                            onClick={handleClose}
                            sx={{ justifyContent: 'flex-start', padding: 2 }}
                        >
                            Yhteystiedot
                        </Button>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header