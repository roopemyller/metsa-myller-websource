import { Box, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Box zIndex={1000} position="fixed" sx={{ textAlign: "center", py: 1.5, bgcolor: "primary.main", mt: 3 , bottom: 0, left: 0, right: 0}}>
            <Typography variant="body2" color="secondary.main" sx={{textAlign: "center"}}>
                Copyright (c) METSÄ-MYLLER<br/>Kaikki oikeudet pidätetään
            </Typography>                
        </Box>
    )
}

export default Footer