import { Box, Typography, Button, Stack  } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"


const Home : React.FC = () => {
    return (
        <Stack 
            direction={{ xs: "column", md: "row" }} 
            spacing={3} 
            alignItems="center"
            padding={3}
        >
            <Box sx={{ flexGrow: 1, justifyContent: 'left'}}>
                <Typography variant="h2" sx={{wordBreak: "break-word", fontSize: { xs: '3rem', md: '3.5rem' }}}>METSÄ-MYLLER palveluksessasi!</Typography>
                <Typography variant="body1">
                    Tarvitsetko apua metsätilasi hoidossa? <br/>
                    Eikö terassilta näe järvelle? <br/>
                    Onko pihallasi liikaa puita tai vaarallisia puita? <br/>
                    Haittaako pihalla oleva kanto liikkumista tai ruohonleikkuuta? <br/>
                    Ammottaako halkoliiteri tyhjyyttä?
                </Typography>
                <br />
                <Button variant="outlined" color="primary" component={Link} to="/yhteystiedot">Ota yhteyttä!</Button>            
            </Box>
            <Box
                component="img"
                src="./henkilo-koko.png"
                alt="Metsä-Myller henkilökuva"
                sx={{
                    paddingRight: 15,
                    maxHeight: 800,
                    width: 'auto',
                    objectFit: 'contain',
                }}
            />
        </Stack>
    )
}

export default Home