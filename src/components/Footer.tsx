import { Button, Box, Typography, Container } from "@mui/material"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Box 
            sx={{ 
                bgcolor: "primary.main",
                width: '100%',
                mt: 'auto'
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    py: 1.5,
                    textAlign: 'center'
                }}
            >
                <Typography variant="body2" color="secondary.main">
                    Copyright (c) METSÄ-MYLLER<br/>Kaikki oikeudet pidätetään
                </Typography>                
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    component={Link} 
                    to="/yhteystiedot"
                >
                    Ota yhteyttä!
                </Button>        

                <Box sx={{ mt: 1 }}>
                    <Button 
                        component={Link} 
                        to="/tietosuoja" 
                        color="secondary" 
                        size="small"
                    >
                        Tietosuojaseloste
                    </Button>
                </Box>    
            </Container>
        </Box>  
    )
}

export default Footer