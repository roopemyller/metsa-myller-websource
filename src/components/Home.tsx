import { Box, Typography, Button,  } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"


const Home : React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, justifyContent: 'left'}}>
            <Typography variant="h2">METSÄ-MYLLER palveluksessasi!</Typography>
            <Typography variant="body1">
                Tarvitsetko apua metsätilasi hoidossa? <br/>
                Eikö terassilta näe järvelle? <br/>
                Onko pihallasi liikaa puita tai vaarallisia puita? <br/>
                Haittaako pihalla oleva kanto liikkumista tai ruohonleikkuuta? <br/>
                Ammottaako halkoliiteri tyhjyyttä?
            </Typography>
            <br />
            <Button variant="outlined" color="primary" component={Link} to="/">Ota yhteyttä!</Button>            
        </Box>
    )
}

export default Home