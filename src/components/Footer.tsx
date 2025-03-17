import { Box, AppBar, Toolbar, Typography,  } from "@mui/material"

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="fixed" color="primary" sx={{top: 'auto', bottom: 0}}>
                <Toolbar sx={{justifyContent: 'center'}}>
                    <Typography variant="body1" color="secondary.main">Copyright (c) METSÄ-MYLLER <br/>Kaikki oikeudet pidätetään</Typography>                
                   </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Footer