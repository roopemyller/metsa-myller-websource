import { Box, Typography, Button, Stack  } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"


const Home : React.FC = () => {
    return (
        <Box>
            <Stack 
                direction={{ xs: "column", md: "row" }} 
                spacing={3} 
                alignItems="center"
                padding={ { xs: 1, md: 4 }}
            >
                <Box sx={{ flexGrow: 1, justifyContent: { xs: "center", md: "left" } }}>
                    <Typography variant="h2" sx={{wordBreak: "break-word", fontSize: { xs: '2.5rem', md: '3.5rem' }}}>METSÄ-MYLLER palveluksessasi!</Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>
                        <ul>Tarvitsetko apua metsätilasi hoidossa?</ul>
                        <ul>Eikö terassilta näe järvelle?</ul>
                        <ul>Onko pihallasi liikaa puita tai vaarallisia puita?</ul>
                        <ul>Haittaako pihalla oleva kanto liikkumista tai ruohonleikkuuta?</ul>
                        <ul>Ammottaako halkoliiteri tyhjyyttä?</ul>
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 2, fontSize: { xs: '1rem', md: '1.3rem' } }}>
                        <strong>Metsätyö Petri Myller toteuttaa kaikki metsätyöt ja puunkaadot ammattitaidolla ja luotettavasti!</strong>
                    </Typography>
                    <br />
                    <Button variant="outlined" color="primary" component={Link} to="/yhteystiedot">Ota yhteyttä!</Button>            
                    <br />
                    <Box
                        component="img"
                        src="./yleis-2.jpg"
                        alt="Metsä-Myller Yleiskuva"
                        sx={{
                            display: { xs: "none", md: "block" },
                            marginTop: 2,
                            width: '100%',
                            maxWidth: '650px',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                        }}
                    />
                </Box>
                <Box
                    display={{ xs: "none", md: "block" }}
                    component="img"
                    src={"./henkilo-koko.png"}
                    alt="Metsä-Myller henkilökuva"
                    sx={{
                        paddingRight: 15,
                        maxHeight: 850,
                        width: 'auto',
                        objectFit: 'contain',
                    }}
                />
                <Box
                    display={{ xs: "block", md: "none" }}
                    component="img"
                    src={"./henkilo-1.jpg"}
                    alt="Metsä-Myller henkilökuva"
                    sx={{
                        maxHeight: 470,
                        width: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.5)',
                    }}
                />
            </Stack>
        </Box>
    )
}

export default Home