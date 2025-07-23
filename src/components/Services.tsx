import { Box, Typography, Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import Firewood from "./Firewood"
import ForestryServices from "./ForestryServices"
import { getImagePath } from "./ImagePath"

const Services : React.FC = () => {
    const [value, setValue] = useState('1');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box sx={{maxWidth: "850px", width: "100%", margin: "0 auto"}}>
            <Typography variant="h2" sx={{wordBreak: "break-word", fontSize: { xs: '2.5rem', md: '3.5rem' }}}>PALVELUT</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'center', pb: 2 }}>
                <Typography variant="body1">
                    Lue lisää alta tarjoamistamme palveluista ja hinnoistamme!
                </Typography>

                <Button sx={{fontSize: 18}} variant="outlined" color="primary" component={Link} to="/yhteystiedot">Pyydä tarjous!</Button>            
            </Box>
            <Box
                component="img"
                src={getImagePath("/yleis-3.webp")}
                alt="Metsä-Myller Yleiskuva"
                sx={{
                    width: '100%',
                    maxWidth: '850px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                }}
            />
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
                    <TabList onChange={handleChange} aria-label="services tabs" variant="fullWidth">
                    <Tab sx={{fontSize: 19}} label="Metsätyöpalvelut" value="1" />
                    <Tab sx={{fontSize: 19}} label="Polttopuut" value="2" />
                    </TabList>
                </Box>
                <Box sx={{ width: '100%', maxWidth: '850px' }}>
                    <TabPanel value="1">
                        <ForestryServices/>
                    </TabPanel>
                    <TabPanel value="2">
                        <Firewood/>
                    </TabPanel>
                </Box>
            </TabContext>
        </Box>
    )
}



export default Services