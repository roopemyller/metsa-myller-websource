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
                    <Button sx={{ ml: 1}} variant="outlined" color="primary" component={Link} to="/palvelut">Palvelut</Button>            
                    <br />
                    <br />
                     <Box
                        sx={{
                            width: '100%',
                            paddingTop: '56.25%', // 16:9 aspect ratio (9 / 16 * 100)
                            position: 'relative',
                            overflow: 'hidden',
                            backgroundColor: 'black',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                        }}
                        >
                        <video
                            src="/video.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                        </Box>
                </Box>
                <Box
                    display={{ xs: "none", md: "block" }}
                    component="img"
                    src={getImagePath('/henkilo-koko-1.webp')}
                    alt="Metsä-Myller henkilökuva"
                    sx={{
                        paddingRight: 2,
                        maxHeight: 850,
                        width: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </Stack>
        </Box>
    )
}

export default Home