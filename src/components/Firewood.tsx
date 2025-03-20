import { Box, Typography, Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody  } from "@mui/material"
import React from "react"

const Firewood: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Polttopuut myy ja toimittaa

            </Typography>
            <Typography variant="h5" gutterBottom>
                Metsäyhtymä Janne ja Petri Myller
            </Typography>
            
            <Typography variant="h6" color="error" gutterBottom>
                Kuiva koivupilke on LOPPU!
            </Typography>
            
            <Typography variant="body1" paragraph>
                Tarjolla on tällä hetkellä kuivaa 45-50 cm <strong>sekapilkettä</strong> (tehty rangasta "klapi-tuikolla"), joka sopii hyvin esim. saunapuuksi tai leivinuuniin. 45 cm havupuupilkettä (tuoretta) on saatavilla ensi keväästä alkaen.
            </Typography>
            
            <Typography variant="h6" gutterBottom>
                Hinnat (sis. alv 25,5%):
            </Typography>
            
            <TableContainer component={Paper} sx={{ mb: 3 }}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell><strong>Tuote</strong></TableCell>
                    <TableCell><strong>Hinta / irto-m³</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell>Koivupilke</TableCell>
                    <TableCell>80,00 €</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Sekapilke (50% koivu, 50% havu)</TableCell>
                    <TableCell>70,00 €</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Havupuupilke ja "klapituiko-sekapilke"</TableCell>
                    <TableCell>60,00 €</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
            
            <Typography variant="body1" paragraph>
                Toimitus alk. <strong>125,00 € / kuorma</strong><br />
                Pinoaminen alk. <strong>25,00 € / irto-m³</strong>
            </Typography>
            
            <Typography variant="body1" paragraph>
                Lisää pilkettä tehdään talvella ja jos kesä on kuiva ja lämmin, on pilkekin kuivaa jo seuraavana syksynä. Pilkkeiden kuivattamiseen käytetään sähköä tasan 0 kWh/m³.
            </Typography>
            
            <Typography variant="body1" paragraph>
                Ensi talvena teemme uutta pilkettä kuivumaan. Jos haluat jotain erityistä pituutta (esim. 50-60 cm), tilaa puut ennakkoon. Normaalisti valmistamme 33 ja 45 cm pilkettä. Jos haluat koivupilkkeet kuivamaan omaan varastoosi, on niiden toimitus mahdollista jo kevättalvella-kesällä (tuore pilke max 5 i-m³ kuormissa).
            </Typography>
            
            <Typography variant="h6" gutterBottom>
                Toimitus
            </Typography>
            <Typography variant="body1" paragraph>
                Polttopuut toimitetaan 3-7 irto-m³ kuormissa kippaavalla henkilöauton peräkärryllä. Toimituksen hinta reitin <strong>Kiihtelysvaara - Heinävaara - Joensuu</strong> varrelle on <strong>125 € / kuorma</strong> (hinta sis. alv 25,5%).
            </Typography>
            
            <Typography variant="body1" paragraph>
                Huomattavasti em. reitiltä poikkeavista toimituksista sovitaan hinta erikseen.
            </Typography>
            
            <Typography variant="body1" paragraph>
                Erikseen sovittaessa puut voidaan pinota asiakkaan liiteriin/vastaavaan.
            </Typography>
            
            <Typography variant="h6" gutterBottom>
                Keskimääräiset polttopuiden muuntokertoimet:
            </Typography>
            
            <TableContainer component={Paper}>
                <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>1 irto-m³</TableCell>
                        <TableCell>0,62 pino-m³</TableCell>
                        <TableCell>0,40 kiinto-m³</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1 pino-m³</TableCell>
                        <TableCell>1,67 irto-m³</TableCell>
                        <TableCell>0,67 kiinto-m³</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1 kiinto-m³</TableCell>
                        <TableCell>2,5 irto-m³</TableCell>
                        <TableCell>1,54 pino-m³</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Firewood