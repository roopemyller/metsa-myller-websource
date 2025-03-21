import { Box, Typography, Button, Stack, TextField, Divider  } from "@mui/material"
import React from "react"

const Contact : React.FC = () => {
    return (
        <Box>
            <Typography variant="h2">
                YHTEYDENOTTO
            </Typography>

            <Typography mb={1}>
                Ota rohkeasti yhteyttä! Voit soittaa, laittaa viestiä tai käyttää alla olevaa lomaketta.
            </Typography>

            <Typography mb={4}>
                Päiväsaikaan tavoittaa parhaiten tekstiviestillä tai sähköpostilla, koska sahan pärinän yli ei puhelimen sointia tahdo kuulla.
            </Typography>

            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                justifyContent="space-between"
            >
        {/* Left Side: Contact Form */}
        <Box sx={{ flex: 1 }}>
            <Stack spacing={2}>
                <TextField label="Koko nimi" variant="outlined" fullWidth required />
                <TextField label="Sähköposti" type="email" variant="outlined" fullWidth required />
                <TextField label="Puhelinnumero" type="tel" variant="outlined" fullWidth required />
                <TextField label="Otsikko" variant="outlined" fullWidth required />
                <TextField label="Viesti" multiline rows={4} variant="outlined" fullWidth required />
                <TextField label="Vahvistuskoodi" variant="outlined" fullWidth required />
                <Button variant="contained" color="primary" size="large">
                Lähetä viesti
                </Button>
            </Stack>
            </Box>
                {/* Divider */}
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ display: { xs: "none", md: "block" } }}
                />
                <Divider
                    orientation="horizontal"
                    flexItem
                    sx={{ display: { md: "none", xs: "block" } }}
                />

                {/* Right Side: Contact Info */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>
                        Yhteystiedot
                    </Typography>

                    <Typography variant="body1">Metsätyöt ja pihapuiden poistot</Typography>
                    <Typography variant="body1">Metsätyö Petri Myller</Typography>
                    <Typography variant="body2">Y-tunnus: 2617685-6</Typography>
                    <Typography variant="body2">0400 858 720</Typography>
                    <Typography variant="body2">petri@metsa-myller.fi</Typography>
                    <Typography variant="body2">Särkäntie 14, 80100 Joensuu</Typography>

                    <Box mt={2}>
                        <Typography variant="body1">Polttopuut</Typography>
                        <Typography variant="body1">Metsäyhtymä Myller Janne ja Petri</Typography>
                        <Typography variant="body2">Y-tunnus: 2313467-7</Typography>

                        <Typography variant="body1" mt={1}>Petri Myller</Typography>
                        <Typography variant="body2">0400 858 720</Typography>
                        <Typography variant="body2">petri@metsa-myller.fi</Typography>
                        <Typography variant="body2">Särkäntie 14, 80100 Joensuu</Typography>

                        <Typography variant="body1" mt={1}>Janne Myller</Typography>
                        <Typography variant="body2">050 563 9668</Typography>
                        <Typography variant="body2">janne@metsa-myller.fi</Typography>
                        <Typography variant="body2">Maanmittarintie 32, 80100 Joensuu</Typography>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Contact