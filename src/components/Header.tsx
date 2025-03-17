import { Box, AppBar, Toolbar, Typography, Button,  } from "@mui/material"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <Box>
            <AppBar position="fixed" color="primary">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <img src="logo.png" alt="logo" style={{width: 75, height: 75, padding: 2}}/>
                    </Box>
                    <Typography variant="h4" component="div" sx={{ color: 'secondary.main' }}>Metsä - Myller</Typography>
                    
                    <Box sx = {{ justifyContent: "left",display: 'flex', gap: 1 }}>
                        <Button variant="outlined" color="inherit" component={Link} to="/">Etusivu</Button>
                        <Button variant="outlined" color="inherit" component={Link} to="/">Meistä</Button>
                        <Button variant="outlined" color="inherit" component={Link} to="/">Palvelut</Button>
                        <Button variant="outlined" color="inherit" component={Link} to="/">Yhteystiedot</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header