import { Box, Typography, Button, Stack  } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

import { getImagePath } from "./ImagePath"


const Home : React.FC = () => {
    return (
        <Box>
            <Stack 
                direction={{ xs: "column", md: "row" }} 
                spacing={3} 
                alignItems="center"
                paddingLeft={ { xs: 0, md: 2}}
            >
                <Box sx={{ flexGrow: 1, justifyContent: { xs: "center", md: "left" } }}>
                    <Typography variant="h2" sx={{wordBreak: "break-word", fontSize: { xs: '2.5rem', md: '3.5rem' }}}>METSÄ-MYLLER palveluksessasi!</Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, paddingLeft: 1 }}>
                        Tarvitsetko apua metsätilasi hoidossa? <br />
                        Eikö terassilta näe järvelle? <br />
                        Onko pihallasi liikaa tai vaarallisia puita? <br />
                        Haittaako pihalla oleva kanto liikkumista tai ruohonleikkuuta? <br />
                        Ammottaako halkoliiterisi tyhjyyttään?
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 2, fontSize: { xs: '1rem', md: '1.3rem' } }}>
                        <strong>Metsätyö Petri Myller toteuttaa kaikki metsätyöt ja puunkaadot ammattitaidolla ja luotettavasti!</strong>
                    </Typography>
                    <br />
                    <Button variant="outlined" color="primary" component={Link} to="/yhteystiedot">Ota yhteyttä!</Button>            
                    <br />
                    <Box
                        component="img"
                        src={getImagePath("/yleis-0.jpg")}
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
                    src={getImagePath('/henkilo-koko-1.png')}
                    alt="Metsä-Myller henkilökuva"
                    sx={{
                        paddingRight: 2,
                        maxHeight: 850,
                        width: 'auto',
                        objectFit: 'contain',
                    }}
                />
                <Box
                    display={{ xs: "block", md: "none" }}
                    component="img"
                    src={getImagePath("/henkilo-1.jpg")}
                    alt="Metsä-Myller henkilökuva"
                    sx={{
                        maxHeight: 450,
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